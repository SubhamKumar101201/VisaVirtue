import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import StepProgress from "./StepProgress.tsx";
import PersonalInfoStep from "./PersonalInfoStep.tsx";
import TravelDetailsStep from "./TravelDetailsStep.tsx";
import DocumentUploadStep from "./DocumentUploadStep.tsx";
import PaymentStep from "./PaymentStep.tsx";
import ReviewStep from "./ReviewStep.tsx";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { queryClient } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

interface ApplicationWizardProps {
  application?: any;
  currentStep: number;
  onStepChange: (step: number) => void;
  onCreateApplication: (data: any) => void;
  isCreating: boolean;
}

export default function ApplicationWizard({ 
  application, 
  currentStep, 
  onStepChange, 
  onCreateApplication,
  isCreating 
}: ApplicationWizardProps) {
  const [formData, setFormData] = useState({
    personalInfo: {},
    travelDetails: {},
    documents: [],
    payment: {},
  });
  const { toast } = useToast();

  // Initialize form data from existing application
  useEffect(() => {
    if (application) {
      setFormData({
        personalInfo: {
          firstName: application.firstName || '',
          lastName: application.lastName || '',
          dateOfBirth: application.dateOfBirth || '',
          nationality: application.nationality || '',
          email: application.email || '',
          phone: application.phone || '',
          passportNumber: application.passportNumber || '',
          passportExpiry: application.passportExpiry || '',
        },
        travelDetails: {
          destinationCountry: application.destinationCountry || '',
          visaType: application.visaType || '',
          departureDate: application.departureDate || '',
          returnDate: application.returnDate || '',
          visitPurpose: application.visitPurpose || '',
          accommodationType: application.accommodationType || '',
          flightConfirmation: application.flightConfirmation || '',
        },
        documents: application.documents || [],
        payment: {},
      });
    }
  }, [application]);

  // Update step mutation
  const updateStepMutation = useMutation({
    mutationFn: async ({ step, data }: { step: number, data: any }) => {
      if (!application?.id) return null;
      
      const response = await fetch(`/api/applications/${application.id}/step`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ step, data }),
      });
      if (!response.ok) throw new Error('Failed to update step');
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/applications'] });
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Failed to update application step",
        variant: "destructive",
      });
    },
  });

  const handleStepComplete = async (stepData: any) => {
    const updatedFormData = { ...formData };
    
    switch (currentStep) {
      case 1:
        updatedFormData.personalInfo = stepData;
        break;
      case 2:
        updatedFormData.travelDetails = stepData;
        break;
      case 3:
        updatedFormData.documents = stepData;
        break;
      case 4:
        updatedFormData.payment = stepData;
        break;
    }

    setFormData(updatedFormData);

    if (application?.id) {
      // Update existing application
      await updateStepMutation.mutateAsync({ step: currentStep + 1, data: stepData });
      onStepChange(currentStep + 1);
    } else if (currentStep === 1) {
      // Create new application with personal info
      const newApplicationData = {
        ...updatedFormData.personalInfo,
        userId: 'default-user',
        status: 'draft',
        currentStep: 2,
      };
      onCreateApplication(newApplicationData);
      onStepChange(2);
    } else {
      onStepChange(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      onStepChange(currentStep - 1);
    }
  };

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <PersonalInfoStep
            data={formData.personalInfo}
            onComplete={handleStepComplete}
            isLoading={isCreating || updateStepMutation.isPending}
          />
        );
      case 2:
        return (
          <TravelDetailsStep
            data={formData.travelDetails}
            onComplete={handleStepComplete}
            isLoading={updateStepMutation.isPending}
          />
        );
      case 3:
        return (
          <DocumentUploadStep
            applicationId={application?.id}
            data={formData.documents}
            onComplete={handleStepComplete}
            isLoading={updateStepMutation.isPending}
          />
        );
      case 4:
        return (
          <PaymentStep
            applicationId={application?.id}
            data={formData.payment}
            onComplete={handleStepComplete}
            isLoading={updateStepMutation.isPending}
          />
        );
      case 5:
        return (
          <ReviewStep
            applicationId={application?.id}
            data={formData}
            onComplete={handleStepComplete}
            isLoading={updateStepMutation.isPending}
          />
        );
      default:
        return null;
    }
  };

  return (
    <Card className="max-w-4xl mx-auto shadow-sm border border-gray-100 overflow-hidden">
      {/* Progress Header */}
      <div className="px-6 py-4 border-b border-gray-100">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-900">
            {application ? 'Update Application' : 'New Visa Application'}
          </h2>
          <span className="text-sm text-gray-600">Step {currentStep} of 5</span>
        </div>
        <StepProgress currentStep={currentStep} totalSteps={5} />
      </div>

      {/* Step Content */}
      <CardContent className="p-6">
        {renderCurrentStep()}
        
        {/* Navigation */}
        <div className="flex items-center justify-between pt-6 mt-6 border-t border-gray-100">
          <Button
            type="button"
            variant="outline"
            onClick={handlePrevious}
            disabled={currentStep === 1}
            className="flex items-center space-x-2"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Previous</span>
          </Button>
          
          <div className="text-sm text-gray-500">
            {application?.applicationNumber && `Application: ${application.applicationNumber}`}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
