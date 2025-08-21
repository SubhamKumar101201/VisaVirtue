import { useState } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { 
  CheckCircle, 
  FileText, 
  User, 
  MapPin, 
  Calendar, 
  DollarSign,
  AlertTriangle,
  Send
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { queryClient } from "@/lib/queryClient";

interface ReviewStepProps {
  applicationId?: string;
  data: any;
  onComplete: (data: any) => void;
  isLoading: boolean;
}

export default function ReviewStep({ applicationId, data, onComplete, isLoading }: ReviewStepProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  // Fetch complete application data
  const { data: application } = useQuery({
    queryKey: ['/api/applications', applicationId],
    enabled: !!applicationId,
  });

  // Fetch documents
  const { data: documents = [] } = useQuery({
    queryKey: ['/api/applications', applicationId, 'documents'],
    enabled: !!applicationId,
  });

  // Submit application mutation
  const submitMutation = useMutation({
    mutationFn: async () => {
      if (!applicationId) throw new Error('Application ID is required');
      
      const response = await fetch(`/api/applications/${applicationId}/submit`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      });
      
      if (!response.ok) throw new Error('Failed to submit application');
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/applications'] });
      toast({
        title: "Application Submitted",
        description: "Your visa application has been submitted successfully and is now under review.",
      });
      onComplete({ submitted: true });
    },
    onError: (error: any) => {
      toast({
        title: "Submission Failed",
        description: error.message || "Failed to submit application. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      await submitMutation.mutateAsync();
    } finally {
      setIsSubmitting(false);
    }
  };

  // Check if application is ready for submission
  const requiredDocuments = ['passport', 'photo'];
  const documentArray = Array.isArray(documents) ? documents : [];
  const uploadedDocumentTypes = documentArray.map((doc: any) => doc.documentType);
  const missingDocuments = requiredDocuments.filter(type => !uploadedDocumentTypes.includes(type));
  const canSubmit = missingDocuments.length === 0 && (application as any)?.status !== 'submitted';

  const getVisaTypeDisplay = (type: string) => {
    const types: Record<string, string> = {
      tourist: 'Tourist/Visitor',
      business: 'Business',
      student: 'Student',
      work: 'Work/Employment',
      transit: 'Transit',
      family: 'Family/Relative',
    };
    return types[type] || type;
  };

  const getCountryDisplay = (code: string) => {
    const countries: Record<string, string> = {
      US: 'United States',
      UK: 'United Kingdom',
      CA: 'Canada',
      AU: 'Australia',
      DE: 'Germany',
      FR: 'France',
      IT: 'Italy',
      ES: 'Spain',
      JP: 'Japan',
      SG: 'Singapore',
    };
    return countries[code] || code;
  };

  if (!application) {
    return (
      <div className="space-y-6">
        <div className="text-center py-12">
          <AlertTriangle className="mx-auto h-12 w-12 text-gray-400" />
          <h3 className="mt-2 text-lg font-medium text-gray-900">No Application Data</h3>
          <p className="mt-1 text-sm text-gray-500">
            Please complete the previous steps before reviewing your application.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Review Your Application</h3>
        <p className="text-sm text-gray-600">
          Please review all information carefully before submitting your visa application.
        </p>
      </div>

      {/* Application Status Alert */}
      {(application as any)?.status === 'submitted' && (
        <Alert className="border-secondary bg-secondary/5">
          <CheckCircle className="h-4 w-4 text-secondary" />
          <AlertDescription className="text-secondary">
            This application has already been submitted and is under review.
          </AlertDescription>
        </Alert>
      )}

      {/* Missing Documents Alert */}
      {missingDocuments.length > 0 && (
        <Alert className="border-error bg-error/5">
          <AlertTriangle className="h-4 w-4 text-error" />
          <AlertDescription className="text-error">
            Please upload the following required documents: {missingDocuments.join(', ')}
          </AlertDescription>
        </Alert>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Personal Information */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base flex items-center space-x-2">
              <User className="h-4 w-4 text-primary" />
              <span>Personal Information</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-gray-600">Full Name:</span>
                <p className="font-medium text-gray-900">
                  {(application as any)?.firstName} {(application as any)?.lastName}
                </p>
              </div>
              <div>
                <span className="text-gray-600">Date of Birth:</span>
                <p className="font-medium text-gray-900">
                  {(application as any)?.dateOfBirth ? new Date((application as any).dateOfBirth).toLocaleDateString() : 'N/A'}
                </p>
              </div>
              <div>
                <span className="text-gray-600">Nationality:</span>
                <p className="font-medium text-gray-900">{(application as any)?.nationality}</p>
              </div>
              <div>
                <span className="text-gray-600">Email:</span>
                <p className="font-medium text-gray-900">{(application as any)?.email}</p>
              </div>
              <div>
                <span className="text-gray-600">Phone:</span>
                <p className="font-medium text-gray-900">{(application as any)?.phone}</p>
              </div>
              <div>
                <span className="text-gray-600">Passport Number:</span>
                <p className="font-medium text-gray-900">{(application as any)?.passportNumber}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Travel Information */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base flex items-center space-x-2">
              <MapPin className="h-4 w-4 text-primary" />
              <span>Travel Information</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-gray-600">Destination:</span>
                <p className="font-medium text-gray-900">
                  {getCountryDisplay(application.destinationCountry)}
                </p>
              </div>
              <div>
                <span className="text-gray-600">Visa Type:</span>
                <p className="font-medium text-gray-900">
                  {getVisaTypeDisplay(application.visaType)}
                </p>
              </div>
              <div>
                <span className="text-gray-600">Departure Date:</span>
                <p className="font-medium text-gray-900">
                  {new Date(application.departureDate).toLocaleDateString()}
                </p>
              </div>
              {application.returnDate && (
                <div>
                  <span className="text-gray-600">Return Date:</span>
                  <p className="font-medium text-gray-900">
                    {new Date(application.returnDate).toLocaleDateString()}
                  </p>
                </div>
              )}
              {application.visitPurpose && (
                <div className="col-span-2">
                  <span className="text-gray-600">Purpose of Visit:</span>
                  <p className="font-medium text-gray-900">{application.visitPurpose}</p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Documents */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base flex items-center space-x-2">
              <FileText className="h-4 w-4 text-primary" />
              <span>Documents ({documents.length})</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            {documents.length > 0 ? (
              <div className="space-y-2">
                {documents.map((doc: any) => (
                  <div key={doc.id} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                    <div className="flex items-center space-x-2">
                      <FileText className="h-4 w-4 text-gray-500" />
                      <div>
                        <p className="text-sm font-medium text-gray-900">{doc.originalName}</p>
                        <p className="text-xs text-gray-600 capitalize">{doc.documentType}</p>
                      </div>
                    </div>
                    <Badge
                      className={
                        doc.verified
                          ? "bg-secondary/10 text-secondary"
                          : "bg-gray-100 text-gray-600"
                      }
                    >
                      {doc.verified ? "Verified" : "Pending"}
                    </Badge>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-4 text-sm text-gray-500">
                No documents uploaded
              </div>
            )}
          </CardContent>
        </Card>

        {/* Application Summary */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base flex items-center space-x-2">
              <DollarSign className="h-4 w-4 text-primary" />
              <span>Application Summary</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Application Number:</span>
                <span className="font-medium text-gray-900">{application.applicationNumber}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Status:</span>
                <Badge
                  className={
                    application.status === 'submitted'
                      ? "bg-accent/10 text-accent"
                      : "bg-gray-100 text-gray-600"
                  }
                >
                  {application.status === 'submitted' ? 'Submitted' : 'Draft'}
                </Badge>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Processing Time:</span>
                <span className="font-medium text-gray-900">7-10 business days</span>
              </div>
              <Separator />
              <div className="flex justify-between font-semibold">
                <span className="text-gray-900">Total Fee:</span>
                <span className="text-gray-900">$160.00</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Submit Button */}
      <div className="flex items-center justify-between pt-6">
        <div className="text-sm text-gray-600">
          By submitting this application, you confirm that all information provided is accurate and complete.
        </div>
        
        <Button
          onClick={handleSubmit}
          disabled={!canSubmit || isSubmitting || submitMutation.isPending || isLoading}
          className="bg-secondary hover:bg-secondary-dark text-white flex items-center space-x-2 px-6 py-2"
        >
          <Send className="h-4 w-4" />
          <span>
            {isSubmitting || submitMutation.isPending 
              ? 'Submitting...' 
              : application.status === 'submitted' 
                ? 'Already Submitted' 
                : 'Submit Application'
            }
          </span>
        </Button>
      </div>
    </div>
  );
}
