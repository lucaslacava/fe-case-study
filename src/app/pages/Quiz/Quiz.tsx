import { useQuiz } from "@/context/QuizContext";
import { ProgressBar } from "@/components/ui/progressBar";
import { Error } from "../Error/Error";
import { Results } from "../Results/Results";
import { QuizContent } from "./QuizContent";
import { useQuizData } from "@/app/hooks/useQuizData";
import { QuizWrapper } from "./QuizWrapper";

export function Quiz() {
  const { currentStep, questions, resetQuiz, showResults } = useQuiz();
  const { isLoading, error } = useQuizData();

  const totalSteps = questions.length + 1; // questions + result screen

  if (error) {
    return <Error onRetry={() => window.location.reload()} />;
  }

  return (
    <QuizWrapper isLoading={isLoading}>
      {showResults ? (
        <Results onCloseQuiz={resetQuiz} />
      ) : (
        <>
          <ProgressBar totalSteps={totalSteps} currentStep={currentStep} />
          <QuizContent />
        </>
      )}
    </QuizWrapper>
  );
}
