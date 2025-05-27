import { useQuiz } from "@/context/QuizContext";
import { ProgressBar } from "@/components/ui/progressBar";
import { useEffect, useState } from "react";
import { fetchQuestions } from "@/app/services/questions";
import LoadingSpinner from "@/components/ui/loadingSpinner";
import { Error } from "../Error/Error";
import { Results } from "../Results/Results";
import { QuizWrapper } from "./QuizWrapper";

export function Quiz() {
  const { currentStep, setQuestions, questions, resetQuiz, showResults } =
    useQuiz();

  const totalSteps = questions.length + 1; // questions + result screen

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const data = await fetchQuestions();
        if (data) {
          setQuestions(data);
        } else {
          setError("No questions received");
        }
      } catch (err) {
        console.error(err);
        setError("Failed to fetch questions");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [setQuestions]);

  if (showResults) {
    return <Results onCloseQuiz={resetQuiz} />;
  }

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <Error onRetry={() => window.location.reload()} />;
  }

  return (
    <div className="min-h-screen w-full bg-white text-black flex flex-col">
      <ProgressBar totalSteps={totalSteps} currentStep={currentStep} />
      <QuizWrapper />
    </div>
  );
}
