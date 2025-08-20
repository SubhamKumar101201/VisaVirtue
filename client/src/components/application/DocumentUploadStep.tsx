import { useState } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Upload, FileText, Camera, DollarSign, File, Check, Trash2 } from "lucide-react";
import { FileUpload } from "@/components/ui/file-upload.tsx";
import { useToast } from "@/hooks/use-toast";
import { queryClient } from "@/lib/queryClient";

interface DocumentUploadStepProps {
  applicationId?: string;
  data: any;
  onComplete: (data: any) => void;
  isLoading: boolean;
}

export default function DocumentUploadStep({ applicationId, data, onComplete, isLoading }: DocumentUploadStepProps) {
  const { toast } = useToast();

  // Fetch existing documents
  const { data: documents = [] } = useQuery({
    queryKey: ['/api/applications', applicationId, 'documents'],
    enabled: !!applicationId,
  });

  // Upload document mutation
  const uploadMutation = useMutation({
    mutationFn: async ({ file, documentType }: { file: File, documentType: string }) => {
      const formData = new FormData();
      formData.append('document', file);
      formData.append('documentType', documentType);
      formData.append('userId', 'default-user');

      const response = await fetch(`/api/applications/${applicationId}/documents`, {
        method: 'POST',
        body: formData,
      });
      
      if (!response.ok) throw new Error('Failed to upload document');
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/applications', applicationId, 'documents'] });
      toast({
        title: "Document Uploaded",
        description: "Your document has been uploaded successfully.",
      });
    },
    onError: (error: any) => {
      toast({
        title: "Upload Failed",
        description: error.message || "Failed to upload document. Please try again.",
        variant: "destructive",
      });
    },
  });

  // Delete document mutation
  const deleteMutation = useMutation({
    mutationFn: async (documentId: string) => {
      const response = await fetch(`/api/documents/${documentId}`, {
        method: 'DELETE',
      });
      if (!response.ok) throw new Error('Failed to delete document');
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/applications', applicationId, 'documents'] });
      toast({
        title: "Document Deleted",
        description: "Document has been removed successfully.",
      });
    },
  });

  const handleFileUpload = (file: File, documentType: string) => {
    if (!applicationId) {
      toast({
        title: "Error",
        description: "Please save your application first before uploading documents.",
        variant: "destructive",
      });
      return;
    }
    uploadMutation.mutate({ file, documentType });
  };

  const handleDeleteDocument = (documentId: string) => {
    deleteMutation.mutate(documentId);
  };

  const handleContinue = () => {
    onComplete(documents);
  };

  const getDocumentIcon = (type: string) => {
    switch (type) {
      case 'passport':
        return <FileText className="h-6 w-6" />;
      case 'photo':
        return <Camera className="h-6 w-6" />;
      case 'financial':
        return <DollarSign className="h-6 w-6" />;
      default:
        return <File className="h-6 w-6" />;
    }
  };

  const getFileIcon = (mimeType: string) => {
    if (mimeType.includes('pdf')) return 'text-red-500';
    if (mimeType.includes('image')) return 'text-blue-500';
    return 'text-gray-500';
  };

  const documentTypes = [
    {
      type: 'passport',
      title: 'Passport Copy',
      description: 'Required • PDF or Image • Max 5MB',
      icon: <FileText className="text-gray-400 h-8 w-8" />,
      required: true,
      accept: '.pdf,.jpg,.jpeg,.png',
    },
    {
      type: 'photo',
      title: 'Passport Photo',
      description: 'Required • Image only • Max 2MB',
      icon: <Camera className="text-gray-400 h-8 w-8" />,
      required: true,
      accept: '.jpg,.jpeg,.png',
    },
    {
      type: 'financial',
      title: 'Financial Documents',
      description: 'Bank statements, pay stubs • PDF',
      icon: <DollarSign className="text-gray-400 h-8 w-8" />,
      required: false,
      accept: '.pdf',
    },
    {
      type: 'additional',
      title: 'Additional Documents',
      description: 'Invitation letters, tickets, etc.',
      icon: <File className="text-gray-400 h-8 w-8" />,
      required: false,
      accept: '.pdf,.jpg,.jpeg,.png',
    },
  ];

  const documentArray = Array.isArray(documents) ? documents : [];
  const groupedDocuments = documentArray.reduce((acc: any, doc: any) => {
    if (!acc[doc.documentType]) acc[doc.documentType] = [];
    acc[doc.documentType].push(doc);
    return acc;
  }, {});

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Required Documents</h3>
        <p className="text-sm text-gray-600">Upload clear, high-quality scans or photos of your documents</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {documentTypes.map((docType) => {
          const typeDocuments = groupedDocuments[docType.type] || [];
          const hasUploaded = typeDocuments.length > 0;

          return (
            <Card key={docType.type} className={`border-2 border-dashed ${hasUploaded ? 'border-secondary' : 'border-gray-300'} hover:border-primary transition-colors`}>
              <CardContent className="p-6 text-center">
                <div className="mb-4">
                  {hasUploaded ? (
                    <Check className="mx-auto text-secondary h-8 w-8 mb-3" />
                  ) : (
                    <div className="mx-auto mb-3">{docType.icon}</div>
                  )}
                  <h4 className="text-sm font-medium text-gray-900 mb-1">{docType.title}</h4>
                  <p className="text-xs text-gray-600 mb-3">{docType.description}</p>
                  {docType.required && (
                    <Badge variant="outline" className="text-xs bg-accent/10 text-accent border-accent">
                      Required
                    </Badge>
                  )}
                </div>

                {!applicationId ? (
                  <div className="text-xs text-gray-500 mb-3">
                    Save your application first to upload documents
                  </div>
                ) : (
                  <FileUpload
                    accept={docType.accept}
                    onUpload={(file) => handleFileUpload(file, docType.type)}
                    disabled={uploadMutation.isPending}
                  />
                )}

                {/* Show uploaded documents */}
                {typeDocuments.length > 0 && (
                  <div className="mt-4 space-y-2">
                    {typeDocuments.map((doc: any) => (
                      <div key={doc.id} className="flex items-center justify-between p-2 bg-gray-50 rounded text-left">
                        <div className="flex items-center space-x-2 flex-1 min-w-0">
                          <FileText className={`h-4 w-4 ${getFileIcon(doc.mimeType)}`} />
                          <div className="min-w-0 flex-1">
                            <p className="text-xs font-medium text-gray-900 truncate">
                              {doc.originalName}
                            </p>
                            <p className="text-xs text-gray-500">
                              {(doc.fileSize / 1024 / 1024).toFixed(1)} MB
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-1">
                          {doc.verified ? (
                            <Badge className="bg-secondary/10 text-secondary text-xs">
                              <Check className="h-3 w-3 mr-1" />
                              Verified
                            </Badge>
                          ) : (
                            <Badge variant="outline" className="text-xs">
                              Pending
                            </Badge>
                          )}
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleDeleteDocument(doc.id)}
                            disabled={deleteMutation.isPending}
                            className="h-6 w-6 p-0 text-gray-400 hover:text-red-500"
                          >
                            <Trash2 className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="flex justify-end">
        <Button 
          onClick={handleContinue}
          className="bg-primary hover:bg-primary-dark text-white flex items-center space-x-2"
          disabled={isLoading}
        >
          <span>Continue</span>
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
