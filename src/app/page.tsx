"use client";

import { useQuiz } from "@/context/QuizContext";
import { QuizProvider } from "@/context/QuizContext";
import { Quiz } from "./pages/Quiz/Quiz";
import { LandingPage } from "./pages/LandingPage/LandingPage";

function Content() {
  const { showQuiz } = useQuiz();

  return showQuiz ? <Quiz /> : <LandingPage />;
}

export default function Home() {
  return (
    <QuizProvider>
      <Content />
    </QuizProvider>
  );
}
