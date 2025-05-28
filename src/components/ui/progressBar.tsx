import { ManualLogo } from "./manualLogo";
import { Progress } from "./progress";

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
}
export const ProgressBar = ({ currentStep, totalSteps }: ProgressBarProps) => {
  return (
    <div
      className="w-full p-4 sm:p-6 border-b flex space-x-4"
      data-testid="progress-bar"
    >
      <ManualLogo className="size-10" />
      <div className="w-full">
        <div className="text-xs sm:text-sm text-gray-500 mb-2">
          Question {currentStep + 1} of {totalSteps}
        </div>
        <Progress value={(currentStep + 1) * 25} />
      </div>
    </div>
  );
};
