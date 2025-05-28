import { useEffect, useState } from "react";
import { fetchQuestions } from "../services/questions";
import { useQuiz } from "@/context/QuizContext";

export const useQuizData = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { setQuestions } = useQuiz();

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

  return { isLoading, error };
};
