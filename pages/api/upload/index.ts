import type { NextApiRequest, NextApiResponse } from 'next';
import formidable from 'formidable';
import fs from 'fs';
import { uploadToCloudinary } from '../../../lib/cloudinary';
import prisma from '../../../lib/prisma';

// Disable Next.js body parsing to handle multipart form data
export const config = {
    api: {
        bodyParser: false,
    },
};

// Allowed image types
const ALLOWED_TYPES = ['image/jpeg', 'image/png', 'image/webp', 'image/gif', 'image/svg+xml'];

// Max file size: 10MB
const MAX_FILE_SIZE = 10 * 1024 * 1024;

interface UploadApiResponse {
    success: boolean;
    url?: string;
    publicId?: string;
    mediaAssetId?: string;
    error?: string;
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<UploadApiResponse>
) {
    if (req.method !== 'POST') {
        return res.status(405).json({ success: false, error: 'Method not allowed' });
    }

    try {
        // Parse multipart form data
        const form = formidable({
            maxFileSize: MAX_FILE_SIZE,
            filter: ({ mimetype }) => {
                // Filter for allowed image types
                return mimetype ? ALLOWED_TYPES.includes(mimetype) : false;
            }
        });

        const [fields, files] = await form.parse(req);

        // Get the uploaded file
        const fileArray = files.file || files.image;
        if (!fileArray || fileArray.length === 0) {
            return res.status(400).json({
                success: false,
                error: 'No file uploaded or file type not allowed. Supported formats: JPEG, PNG, WebP, GIF, SVG'
            });
        }

        const file = fileArray[0];

        // Validate file type
        if (!file.mimetype || !ALLOWED_TYPES.includes(file.mimetype)) {
            return res.status(400).json({
                success: false,
                error: 'Invalid file type. Supported formats: JPEG, PNG, WebP, GIF, SVG'
            });
        }

        // Read file buffer
        const fileBuffer = fs.readFileSync(file.filepath);

        // Get the folder from form fields (optional)
        const folderArray = fields.folder;
        const folder = folderArray && folderArray.length > 0
            ? `magri-cabinets/${folderArray[0]}`
            : 'magri-cabinets/general';

        // Upload to Cloudinary
        const uploadResult = await uploadToCloudinary(fileBuffer, folder);

        // Clean up temp file
        fs.unlinkSync(file.filepath);

        if (!uploadResult.success || !uploadResult.url) {
            return res.status(500).json({
                success: false,
                error: uploadResult.error || 'Failed to upload to Cloudinary'
            });
        }

        // Get the saveToMedia flag from form fields
        const saveToMediaArray = fields.saveToMedia;
        const saveToMedia = saveToMediaArray && saveToMediaArray[0] === 'true';

        let mediaAssetId: string | undefined;

        // Optionally save to MediaAsset table
        if (saveToMedia) {
            const mediaAsset = await prisma.mediaAsset.create({
                data: {
                    filename: file.originalFilename || 'uploaded-image',
                    url: uploadResult.url,
                    type: 'image',
                    size: file.size,
                }
            });
            mediaAssetId = mediaAsset.id;
        }

        return res.status(200).json({
            success: true,
            url: uploadResult.url,
            publicId: uploadResult.publicId,
            mediaAssetId,
        });

    } catch (error: unknown) {
        console.error('Upload API error:', error);

        // Handle formidable file size error
        if (error && typeof error === 'object' && 'code' in error && error.code === 'LIMIT_FILE_SIZE') {
            return res.status(413).json({
                success: false,
                error: 'File size exceeds maximum limit of 10MB'
            });
        }

        return res.status(500).json({
            success: false,
            error: 'Internal server error during upload'
        });
    }
}
