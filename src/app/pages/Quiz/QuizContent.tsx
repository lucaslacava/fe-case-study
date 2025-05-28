import { Button } from "@/components/ui/button";
import { QuizItem } from "./QuizItem";
import { ArrowLeftCircle } from "lucide-react";
import { useQuiz } from "@/context/QuizContext";

export const QuizContent = () => {
  const { currentStep, handleBack, questions } = useQuiz();
  const currentQuestion = questions[currentStep];

  return (
    <div className="flex-1 flex flex-col items-center justify-center p-4 sm:p-8">
      <div className="w-full max-w-5xl space-y-6 sm:space-y-8">
        <h2 className="text-xl sm:text-2xl font-bold">
          {currentQuestion?.question}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {currentQuestion?.options.map((option, index) => (
            <QuizItem option={option} key={index} />
          ))}
        </div>

        <div className="flex justify-between mt-6 sm:mt-8">
          {currentStep > 0 && (
            <Button
              variant="ghost"
              onClick={handleBack}
              className="text-sm sm:text-base flex items-center justify-center gap-2"
            >
              <ArrowLeftCircle className="size-4" />
              <span>Back</span>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
