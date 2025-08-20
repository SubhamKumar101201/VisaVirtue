import { useState } from "react";
import { useParams } from "wouter";
import { useQuery, useMutation } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import ApplicationWizard from "@/components/application/ApplicationWizard";
import { queryClient } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

export default function Application() {
  const { id } = useParams();
  const [currentStep, setCurrentStep] = useState(1);
  const { toast } = useToast();

  // If we have an ID, load existing application
  const { data: application, isLoading } = useQuery({
    queryKey: ['/api/applications', id],
    enabled: !!id,
  });

  // Create new application mutation
  const createApplicationMutation = useMutation({
    mutationFn: async (data: any) => {
      const response = await fetch('/api/applications', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...data,
          userId: 'default-user',
          status: 'draft',
          currentStep: 1,
        }),
      });
      if (!response.ok) throw new Error('Failed to create application');
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/applications'] });
      toast({
        title: "Application Created",
        description: "Your visa application has been started successfully.",
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to create application. Please try again.",
        variant: "destructive",
      });
    },
  });

  if (isLoading) {
    return (
      <div className="bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-6">
              <div className="animate-pulse space-y-4">
                <div className="h-8 bg-gray-200 rounded w-1/3"></div>
                <div className="h-64 bg-gray-200 rounded"></div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <ApplicationWizard
          application={application}
          currentStep={(application as any)?.currentStep || currentStep}
          onStepChange={setCurrentStep}
          onCreateApplication={(data) => createApplicationMutation.mutate(data)}
          isCreating={createApplicationMutation.isPending}
        />
      </div>
    </div>
  );
}
