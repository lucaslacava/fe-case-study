import { ManualLogo } from "./manualLogo";
import { Progress } from "./progress";

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
}
export const ProgressBar = ({ currentStep, totalSteps }: ProgressBarProps) => {
  return (
    <div className="w-full p-4 sm:p-6 border-b">
      <ManualLogo className="size-10" />
      <div className="max-w-5xl mx-auto">
        <div className="text-xs sm:text-sm text-gray-500 mb-2">
          Question {currentStep + 1} of {totalSteps}
        </div>
        <Progress value={(currentStep + 1) * 25} />
      </div>
    </div>
  );
};
