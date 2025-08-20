import { useState, useCallback } from "react";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";

interface UseFileUploadProps {
  applicationId?: string;
  onSuccess?: (data: any) => void;
  onError?: (error: any) => void;
}

interface UploadData {
  file: File;
  documentType: string;
  userId?: string;
}

export function useFileUpload({ 
  applicationId, 
  onSuccess, 
  onError 
}: UseFileUploadProps) {
  const [uploadProgress, setUploadProgress] = useState<Record<string, number>>({});
  const [uploadingFiles, setUploadingFiles] = useState<Set<string>>(new Set());
  const { toast } = useToast();

  const uploadMutation = useMutation({
    mutationFn: async ({ file, documentType, userId = 'default-user' }: UploadData) => {
      if (!applicationId) {
        throw new Error('Application ID is required');
      }

      const formData = new FormData();
      formData.append('document', file);
      formData.append('documentType', documentType);
      formData.append('userId', userId);

      // Track upload progress
      const fileId = `${file.name}-${Date.now()}`;
      setUploadingFiles(prev => new Set(prev).add(fileId));
      setUploadProgress(prev => ({ ...prev, [fileId]: 0 }));

      // Simulate progress updates
      const progressInterval = setInterval(() => {
        setUploadProgress(prev => ({
          ...prev,
          [fileId]: Math.min((prev[fileId] || 0) + Math.random() * 20, 90)
        }));
      }, 200);

      try {
        const response = await fetch(`/api/applications/${applicationId}/documents`, {
          method: 'POST',
          body: formData,
        });

        clearInterval(progressInterval);
        
        if (!response.ok) {
          const errorData = await response.json().catch(() => ({}));
          throw new Error(errorData.message || `Upload failed: ${response.statusText}`);
        }

        const result = await response.json();
        
        // Complete progress
        setUploadProgress(prev => ({ ...prev, [fileId]: 100 }));
        
        // Clean up after delay
        setTimeout(() => {
          setUploadingFiles(prev => {
            const newSet = new Set(prev);
            newSet.delete(fileId);
            return newSet;
          });
          setUploadProgress(prev => {
            const { [fileId]: _, ...rest } = prev;
            return rest;
          });
        }, 1000);

        return { ...result, fileId };
      } catch (error) {
        clearInterval(progressInterval);
        setUploadingFiles(prev => {
          const newSet = new Set(prev);
          newSet.delete(fileId);
          return newSet;
        });
        setUploadProgress(prev => {
          const { [fileId]: _, ...rest } = prev;
          return rest;
        });
        throw error;
      }
    },
    onSuccess: (data) => {
      toast({
        title: "Upload Successful",
        description: "Your document has been uploaded successfully.",
      });
      onSuccess?.(data);
    },
    onError: (error: any) => {
      const message = error.message || "Failed to upload document. Please try again.";
      toast({
        title: "Upload Failed",
        description: message,
        variant: "destructive",
      });
      onError?.(error);
    },
  });

  const uploadFile = useCallback(async (file: File, documentType: string, userId?: string) => {
    return uploadMutation.mutateAsync({ file, documentType, userId });
  }, [uploadMutation]);

  const validateFile = useCallback((file: File, options: {
    maxSize?: number;
    allowedTypes?: string[];
  } = {}) => {
    const { maxSize = 5 * 1024 * 1024, allowedTypes = ['pdf', 'jpg', 'jpeg', 'png'] } = options;
    
    // Check file size
    if (file.size > maxSize) {
      throw new Error(`File size exceeds ${(maxSize / 1024 / 1024).toFixed(1)}MB limit`);
    }

    // Check file type
    const fileExtension = file.name.split('.').pop()?.toLowerCase();
    if (!fileExtension || !allowedTypes.includes(fileExtension)) {
      throw new Error(`Invalid file type. Allowed types: ${allowedTypes.join(', ')}`);
    }

    // Check file name length
    if (file.name.length > 100) {
      throw new Error('File name is too long');
    }

    return true;
  }, []);

  const getUploadProgress = useCallback((fileId: string) => {
    return uploadProgress[fileId] || 0;
  }, [uploadProgress]);

  const isFileUploading = useCallback((fileId?: string) => {
    if (fileId) {
      return uploadingFiles.has(fileId);
    }
    return uploadingFiles.size > 0;
  }, [uploadingFiles]);

  return {
    uploadFile,
    validateFile,
    isUploading: uploadMutation.isPending || uploadingFiles.size > 0,
    isFileUploading,
    uploadProgress,
    getUploadProgress,
    uploadingFiles: Array.from(uploadingFiles),
    error: uploadMutation.error,
    reset: uploadMutation.reset,
  };
}

// Helper hook for document type validation
export function useDocumentValidation() {
  const getDocumentRequirements = useCallback((documentType: string) => {
    const requirements: Record<string, {
      maxSize: number;
      allowedTypes: string[];
      description: string;
    }> = {
      passport: {
        maxSize: 5 * 1024 * 1024, // 5MB
        allowedTypes: ['pdf', 'jpg', 'jpeg', 'png'],
        description: 'Clear scan or photo of passport information page',
      },
      photo: {
        maxSize: 2 * 1024 * 1024, // 2MB
        allowedTypes: ['jpg', 'jpeg', 'png'],
        description: 'Recent passport-style photograph',
      },
      financial: {
        maxSize: 10 * 1024 * 1024, // 10MB
        allowedTypes: ['pdf'],
        description: 'Bank statements, salary slips, or financial proof',
      },
      additional: {
        maxSize: 5 * 1024 * 1024, // 5MB
        allowedTypes: ['pdf', 'jpg', 'jpeg', 'png'],
        description: 'Supporting documents like invitation letters, tickets, etc.',
      },
    };

    return requirements[documentType] || requirements.additional;
  }, []);

  const validateDocumentType = useCallback((file: File, documentType: string) => {
    const requirements = getDocumentRequirements(documentType);
    
    if (file.size > requirements.maxSize) {
      throw new Error(`File size exceeds ${(requirements.maxSize / 1024 / 1024).toFixed(1)}MB limit for ${documentType} documents`);
    }

    const fileExtension = file.name.split('.').pop()?.toLowerCase();
    if (!fileExtension || !requirements.allowedTypes.includes(fileExtension)) {
      throw new Error(`Invalid file type for ${documentType}. Allowed types: ${requirements.allowedTypes.join(', ')}`);
    }

    return true;
  }, [getDocumentRequirements]);

  return {
    getDocumentRequirements,
    validateDocumentType,
  };
}
