import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Upload, FileText, AlertCircle, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface FileUploadProps {
  accept?: string;
  maxSize?: number;
  onUpload: (file: File) => void;
  disabled?: boolean;
  multiple?: boolean;
  className?: string;
}

export function FileUpload({ 
  accept = ".pdf,.jpg,.jpeg,.png",
  maxSize = 5 * 1024 * 1024, // 5MB default
  onUpload,
  disabled = false,
  multiple = false,
  className
}: FileUploadProps) {
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const onDrop = useCallback(async (acceptedFiles: File[], rejectedFiles: any[]) => {
    setError(null);
    setSuccess(false);

    // Handle rejected files
    if (rejectedFiles.length > 0) {
      const rejection = rejectedFiles[0];
      if (rejection.errors.find((e: any) => e.code === 'file-too-large')) {
        setError(`File is too large. Maximum size is ${(maxSize / 1024 / 1024).toFixed(1)}MB`);
      } else if (rejection.errors.find((e: any) => e.code === 'file-invalid-type')) {
        setError('Invalid file type. Please upload a supported file format.');
      } else {
        setError('File upload failed. Please try again.');
      }
      return;
    }

    if (acceptedFiles.length === 0) return;

    const file = acceptedFiles[0];
    
    try {
      setIsUploading(true);
      setUploadProgress(0);

      // Simulate upload progress
      const progressInterval = setInterval(() => {
        setUploadProgress(prev => {
          if (prev >= 90) {
            clearInterval(progressInterval);
            return prev;
          }
          return prev + 10;
        });
      }, 100);

      await onUpload(file);
      
      clearInterval(progressInterval);
      setUploadProgress(100);
      setSuccess(true);
      
      // Reset success state after 2 seconds
      setTimeout(() => {
        setSuccess(false);
        setUploadProgress(0);
      }, 2000);
      
    } catch (error: any) {
      setError(error.message || 'Upload failed. Please try again.');
    } finally {
      setIsUploading(false);
    }
  }, [onUpload, maxSize]);

  const { getRootProps, getInputProps, isDragActive, isDragReject } = useDropzone({
    onDrop,
    accept: accept.split(',').reduce((acc, type) => {
      const trimmed = type.trim();
      if (trimmed.startsWith('.pdf')) acc['application/pdf'] = ['.pdf'];
      if (trimmed.includes('jpg') || trimmed.includes('jpeg')) {
        acc['image/jpeg'] = ['.jpg', '.jpeg'];
      }
      if (trimmed.includes('png')) acc['image/png'] = ['.png'];
      return acc;
    }, {} as Record<string, string[]>),
    maxSize,
    multiple,
    disabled: disabled || isUploading
  });

  return (
    <div className={cn("w-full", className)}>
      <div
        {...getRootProps()}
        className={cn(
          "border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors",
          isDragActive && !isDragReject && "border-primary bg-primary/5",
          isDragReject && "border-error bg-error/5",
          !isDragActive && !isDragReject && "border-gray-300 hover:border-primary hover:bg-gray-50",
          disabled && "opacity-50 cursor-not-allowed",
          success && "border-secondary bg-secondary/5"
        )}
      >
        <input {...getInputProps()} />
        
        {isUploading ? (
          <div className="space-y-4">
            <Upload className="mx-auto h-8 w-8 text-primary animate-pulse" />
            <div>
              <p className="text-sm font-medium text-gray-900">Uploading...</p>
              <Progress value={uploadProgress} className="mt-2" />
            </div>
          </div>
        ) : success ? (
          <div className="space-y-2">
            <CheckCircle className="mx-auto h-8 w-8 text-secondary" />
            <p className="text-sm font-medium text-secondary">Upload successful!</p>
          </div>
        ) : (
          <div className="space-y-2">
            <Upload className="mx-auto h-8 w-8 text-gray-400" />
            {isDragActive ? (
              <p className="text-sm font-medium text-primary">Drop files here...</p>
            ) : (
              <div>
                <p className="text-sm font-medium text-gray-900">
                  Drag & drop files here, or click to browse
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  Supported formats: {accept} • Max size: {(maxSize / 1024 / 1024).toFixed(1)}MB
                </p>
              </div>
            )}
          </div>
        )}
      </div>

      {error && (
        <Alert className="mt-3 border-error bg-error/5">
          <AlertCircle className="h-4 w-4 text-error" />
          <AlertDescription className="text-error">{error}</AlertDescription>
        </Alert>
      )}

      {!isDragActive && !isUploading && !success && !error && (
        <Button
          type="button"
          variant="outline"
          className="mt-3 w-full border-primary text-primary hover:bg-primary hover:text-white"
          onClick={() => document.getElementById('file-input')?.click()}
          disabled={disabled}
        >
          <Upload className="mr-2 h-4 w-4" />
          Choose Files
        </Button>
      )}
    </div>
  );
}
