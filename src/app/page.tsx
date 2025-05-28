"use client";

import { useQuiz } from "@/context/QuizContext";
import { QuizProvider } from "@/context/QuizContext";
import { Quiz } from "./pages/Quiz/Quiz";
import { LandingPage } from "./pages/LandingPage/LandingPage";

function Content() {
  const { showQuiz } = useQuiz();

  return (
    <>
      <LandingPage />
      {showQuiz && <Quiz />}
    </>
  );
}

export default function Home() {
  return (
    <QuizProvider>
      <Content />
    </QuizProvider>
  );
}
