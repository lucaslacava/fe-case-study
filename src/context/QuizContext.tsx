import { createContext, useContext, useState, ReactNode } from "react";
import { QuizQuestion, QuizOption } from "@/types/quiz";

interface QuizContextType {
  answers: Record<number, QuizOption>;
  questions: QuizQuestion[];
  currentStep: number;
  showQuiz: boolean;
  showResults: boolean;
  hasRejection: boolean;
  setAnswers: (answers: Record<number, QuizOption>) => void;
  setQuestions: (questions: QuizQuestion[]) => void;
  setCurrentStep: (step: number) => void;
  setShowQuiz: (show: boolean) => void;
  setShowResults: (show: boolean) => void;
  setHasRejection: (hasRejection: boolean) => void;
  resetQuiz: () => void;
  handleAnswer: (option: QuizOption) => void;
  handleBack: () => void;
}

const QuizContext = createContext<QuizContextType | undefined>(undefined);

export function QuizProvider({ children }: { children: ReactNode }) {
  const [answers, setAnswers] = useState<Record<number, QuizOption>>({});
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentStep, setCurrentStep] = useState(0);

  const [showQuiz, setShowQuiz] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const [hasRejection, setHasRejection] = useState(false);

  const handleAnswer = (option: QuizOption) => {
    const newAnswers = {
      ...answers,
      [currentStep]: option,
    };
    setAnswers(newAnswers);

    if (option.isRejection) {
      setHasRejection(true);
      setShowResults(true);
      return;
    }

    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Check if all questions are answered
      const allQuestionsAnswered = questions.every(
        (_, index) => newAnswers[index]
      );
      if (allQuestionsAnswered) {
        setShowResults(true);
      }
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const resetQuiz = () => {
    setAnswers({});
    setCurrentStep(0);
    setShowQuiz(false);
    setShowResults(false);
    setHasRejection(false);
  };

  return (
    <QuizContext.Provider
      value={{
        answers,
        questions,
        currentStep,
        showQuiz,
        showResults,
        hasRejection,
        setAnswers,
        setQuestions,
        setCurrentStep,
        setShowQuiz,
        setShowResults,
        setHasRejection,
        resetQuiz,
        handleAnswer,
        handleBack,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
}

export function useQuiz() {
  const context = useContext(QuizContext);
  if (context === undefined) {
    throw new Error("useQuiz must be used within a QuizProvider");
  }
  return context;
}
