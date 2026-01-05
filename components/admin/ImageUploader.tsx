import { useState, useRef, useCallback } from 'react';
import Image from 'next/image';
import { Upload, X, Loader2, Image as ImageIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ImageUploaderProps {
    currentImage?: string;
    onImageUploaded: (url: string, publicId?: string) => void;
    folder?: string;
    saveToMedia?: boolean;
    aspectRatio?: 'square' | 'video' | 'banner';
    className?: string;
    showRemoveButton?: boolean;
    onRemove?: () => void;
}

export default function ImageUploader({
    currentImage,
    onImageUploaded,
    folder = 'general',
    saveToMedia = false,
    aspectRatio = 'video',
    className = '',
    showRemoveButton = true,
    onRemove,
}: ImageUploaderProps) {
    const [isUploading, setIsUploading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [dragOver, setDragOver] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const getAspectClass = () => {
        switch (aspectRatio) {
            case 'square': return 'aspect-square';
            case 'video': return 'aspect-video';
            case 'banner': return 'aspect-[21/9]';
            default: return 'aspect-video';
        }
    };

    const handleUpload = useCallback(async (file: File) => {
        setIsUploading(true);
        setError(null);

        try {
            const formData = new FormData();
            formData.append('file', file);
            formData.append('folder', folder);
            formData.append('saveToMedia', saveToMedia.toString());

            const response = await fetch('/api/upload', {
                method: 'POST',
                body: formData,
            });

            const result = await response.json();

            if (!response.ok || !result.success) {
                throw new Error(result.error || 'Upload failed');
            }

            onImageUploaded(result.url, result.publicId);
        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : 'Upload failed';
            setError(errorMessage);
            console.error('Upload error:', err);
        } finally {
            setIsUploading(false);
        }
    }, [folder, saveToMedia, onImageUploaded]);

    const handleFileSelect = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            handleUpload(file);
        }
    }, [handleUpload]);

    const handleDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setDragOver(false);

        const file = e.dataTransfer.files?.[0];
        if (file && file.type.startsWith('image/')) {
            handleUpload(file);
        } else {
            setError('Please drop an image file');
        }
    }, [handleUpload]);

    const handleDragOver = useCallback((e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setDragOver(true);
    }, []);

    const handleDragLeave = useCallback((e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setDragOver(false);
    }, []);

    const handleClick = useCallback(() => {
        fileInputRef.current?.click();
    }, []);

    const handleRemove = useCallback(() => {
        if (onRemove) {
            onRemove();
        } else {
            onImageUploaded('');
        }
    }, [onRemove, onImageUploaded]);

    return (
        <div className={className}>
            <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileSelect}
                accept="image/jpeg,image/png,image/webp,image/gif,image/svg+xml"
                className="hidden"
            />

            <div
                className={`
                    ${getAspectClass()} 
                    bg-gray-50 rounded-2xl border-2 border-dashed 
                    ${dragOver ? 'border-orange-500 bg-orange-50' : 'border-gray-200'} 
                    ${isUploading ? 'opacity-75' : ''} 
                    flex items-center justify-center cursor-pointer relative overflow-hidden group 
                    transition-all duration-200 hover:border-orange-400
                `}
                onClick={handleClick}
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
            >
                {currentImage ? (
                    <>
                        <Image
                            src={currentImage}
                            alt="Uploaded"
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        {/* Hover overlay */}
                        <div className="absolute inset-0 bg-orange-500/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                            <span className="text-white text-[10px] font-black uppercase tracking-widest">
                                {isUploading ? 'Uploading...' : 'Change Image'}
                            </span>
                        </div>
                        {/* Remove button */}
                        {showRemoveButton && !isUploading && (
                            <button
                                type="button"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleRemove();
                                }}
                                className="absolute top-2 right-2 p-1.5 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors z-10 opacity-0 group-hover:opacity-100"
                            >
                                <X size={14} />
                            </button>
                        )}
                    </>
                ) : isUploading ? (
                    <div className="text-center">
                        <Loader2 size={40} className="text-orange-500 mx-auto mb-2 animate-spin" />
                        <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">Uploading...</p>
                    </div>
                ) : (
                    <div className="text-center p-4">
                        <ImageIcon size={40} className="text-gray-200 mx-auto mb-2" />
                        <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-1">
                            {dragOver ? 'Drop Image Here' : 'Upload Image'}
                        </p>
                        <p className="text-[9px] text-gray-300">
                            Drag & drop or click to browse
                        </p>
                    </div>
                )}

                {/* Loading overlay */}
                {isUploading && currentImage && (
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center backdrop-blur-sm">
                        <Loader2 size={32} className="text-white animate-spin" />
                    </div>
                )}
            </div>

            {error && (
                <p className="mt-2 text-xs text-red-500 font-medium">{error}</p>
            )}

            {!currentImage && !isUploading && (
                <Button
                    type="button"
                    variant="outline"
                    onClick={handleClick}
                    className="w-full mt-2 rounded-xl border-gray-200 hover:border-orange-400 hover:bg-orange-50 transition-all"
                >
                    <Upload size={16} className="mr-2" /> Browse Files
                </Button>
            )}
        </div>
    );
}
