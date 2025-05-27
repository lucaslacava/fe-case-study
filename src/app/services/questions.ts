import { QuizResponse } from "@/types/quiz";

export const fetchQuestions = async () => {
  try {
    const response = await fetch("/api/questions");
    if (!response.ok) {
      throw new Error("Failed to fetch questions");
    }
    const data: QuizResponse = await response.json();
    return data.questions;
  } catch (err) {
    console.error("Error fetching questions:", err);
  }
};
