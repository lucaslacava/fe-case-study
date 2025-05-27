import { QuizOption } from "@/types/quiz";
import { useQuiz } from "@/context/QuizContext";
import { Button } from "@/components/ui/button";

interface QuizItemProps {
  option: QuizOption;
}
export const QuizItem = ({ option }: QuizItemProps) => {
  const { answers, currentStep, handleAnswer } = useQuiz();
  return (
    <Button
      variant={
        answers[currentStep]?.value === option.value ? "default" : "outline"
      }
      className="w-full h-auto min-h-[100px] sm:min-h-[120px] p-4 sm:p-6 transition-colors flex flex-col items-center justify-center text-center cursor-pointer"
      onClick={() => handleAnswer(option)}
    >
      {option.display && (
        <div
          className="text-lg sm:text-xl"
          dangerouslySetInnerHTML={{ __html: option.display }}
        />
      )}
      {option.value && (
        <span className="text-base sm:text-lg text-primary-foreground">
          {option.value}
        </span>
      )}
    </Button>
  );
};
