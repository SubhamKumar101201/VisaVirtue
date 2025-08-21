import { Check } from "lucide-react";

interface StepProgressProps {
  currentStep: number;
  totalSteps: number;
}

const stepLabels = [
  "Personal Info",
  "Travel Details",
  "Documents",
  "Payment",
  "Review"
];

export default function StepProgress({ currentStep, totalSteps }: StepProgressProps) {
  return (
    <div className="flex items-center space-x-4">
      {Array.from({ length: totalSteps }, (_, index) => {
        const stepNumber = index + 1;
        const isCompleted = stepNumber < currentStep;
        const isCurrent = stepNumber === currentStep;
        const isUpcoming = stepNumber > currentStep;
        
        return (
          <div key={stepNumber} className="flex items-center">
            {/* Step Circle */}
            <div className={`
              w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold
              ${isCompleted ? 'bg-secondary text-white' : 
                isCurrent ? 'bg-primary text-white' : 
                'bg-gray-200 text-gray-500'}
            `}>
              {isCompleted ? (
                <Check className="h-4 w-4" />
              ) : (
                stepNumber
              )}
            </div>
            
            {/* Step Label */}
            <span className={`
              ml-2 text-sm font-medium
              ${isCompleted ? 'text-secondary' : 
                isCurrent ? 'text-primary' : 
                'text-gray-500'}
            `}>
              {stepLabels[index]}
            </span>
            
            {/* Connector Line */}
            {stepNumber < totalSteps && (
              <div className={`
                flex-1 h-px mx-4 min-w-[1rem]
                ${isCompleted ? 'bg-secondary' : 'bg-gray-200'}
              `} />
            )}
          </div>
        );
      })}
    </div>
  );
}
