import { v2 as cloudinary } from 'cloudinary';

// Configure Cloudinary with environment variables
// CLOUDINARY_CLOUD_NAME is fixed to 'dpbuxfm1f'
// API Key and Secret must be set in environment variables
cloudinary.config({
    cloud_name: 'dpbuxfm1f', // Fixed cloud name as per requirements
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true,
});

export interface CloudinaryUploadResult {
    secure_url: string;
    public_id: string;
    format: string;
    width: number;
    height: number;
    bytes: number;
    original_filename: string;
}

export interface UploadResponse {
    success: boolean;
    url?: string;
    publicId?: string;
    error?: string;
}

/**
 * Upload a file buffer to Cloudinary
 * @param buffer - The file buffer to upload
 * @param folder - The folder path in Cloudinary (e.g., 'magri-cabinets/blogs')
 * @returns Promise with upload result
 */
export async function uploadToCloudinary(
    buffer: Buffer,
    folder: string = 'magri-cabinets'
): Promise<UploadResponse> {
    return new Promise((resolve) => {
        const uploadStream = cloudinary.uploader.upload_stream(
            {
                folder,
                resource_type: 'auto',
                // Optimize images for web
                transformation: [
                    { quality: 'auto:good' },
                    { fetch_format: 'auto' }
                ]
            },
            (error, result) => {
                if (error || !result) {
                    console.error('Cloudinary upload error:', error);
                    resolve({
                        success: false,
                        error: error?.message || 'Upload failed'
                    });
                } else {
                    resolve({
                        success: true,
                        url: result.secure_url,
                        publicId: result.public_id
                    });
                }
            }
        );

        uploadStream.end(buffer);
    });
}

/**
 * Delete an image from Cloudinary by public_id
 * @param publicId - The public_id of the image to delete
 */
export async function deleteFromCloudinary(publicId: string): Promise<boolean> {
    try {
        await cloudinary.uploader.destroy(publicId);
        return true;
    } catch (error) {
        console.error('Cloudinary delete error:', error);
        return false;
    }
}

export default cloudinary;
