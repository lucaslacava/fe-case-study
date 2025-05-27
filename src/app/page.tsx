"use client";

import { Button } from "@/components/ui/button";
import { useQuiz } from "@/context/QuizContext";
import { QuizProvider } from "@/context/QuizContext";
import { Quiz } from "./pages/Quiz/Quiz";

function LandingPage() {
  const { setShowQuiz, showQuiz } = useQuiz();

  const handleStartQuiz = () => {
    setShowQuiz(true);
  };

  if (showQuiz) {
    return <Quiz />;
  }

  return (
    <div className="min-h-screen w-full bg-white text-black flex flex-col items-center justify-center p-8">
      <div className="max-w-2xl w-full space-y-8 text-center">
        {/* Landing page content */}
        <Button onClick={handleStartQuiz} className="px-8 py-6 text-lg">
          Take the Quiz
        </Button>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <QuizProvider>
      <LandingPage />
    </QuizProvider>
  );
}
