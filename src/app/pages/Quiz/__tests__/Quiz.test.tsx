import { render, screen } from "@testing-library/react";
import { Quiz } from "../Quiz";
import { QuizProvider } from "@/context/QuizContext";
import * as QuizContext from "@/context/QuizContext";
import * as QuizData from "@/app/hooks/useQuizData";

// Mocks
jest.mock("@/app/hooks/useQuizData", () => ({
  useQuizData: jest.fn(),
}));

jest.mock("@/context/QuizContext", () => ({
  ...jest.requireActual("@/context/QuizContext"),
  useQuiz: jest.fn(),
}));

const renderQuiz = () => {
  return render(
    <QuizProvider>
      <Quiz />
    </QuizProvider>
  );
};

describe("Quiz", () => {
  beforeEach(() => {
    jest.clearAllMocks();

    // Default mock implementation
    (QuizData.useQuizData as jest.Mock).mockReturnValue({
      isLoading: false,
      error: null,
    });

    (QuizContext.useQuiz as jest.Mock).mockReturnValue({
      currentStep: 1,
      questions: [],
      handleBack: () => {},
      answers: [],
    });
  });

  it("renders loading state", () => {
    (QuizData.useQuizData as jest.Mock).mockReturnValue({
      isLoading: true,
      error: null,
    });

    renderQuiz();
    expect(screen.getByTestId("loading-page")).toBeInTheDocument();
  });

  it("renders error state", () => {
    (QuizData.useQuizData as jest.Mock).mockReturnValue({
      isLoading: false,
      error: new Error("Test error"),
    });

    renderQuiz();
    expect(screen.getByText(/something went wrong/i)).toBeInTheDocument();
  });

  it("renders quiz content when loaded", () => {
    (QuizData.useQuizData as jest.Mock).mockReturnValue({
      isLoading: false,
      error: null,
    });

    renderQuiz();
    expect(screen.getByTestId("quiz-options")).toBeInTheDocument();
  });

  it("renders results when showResults is true", () => {
    (QuizData.useQuizData as jest.Mock).mockReturnValue({
      isLoading: false,
      error: null,
    });

    (QuizContext.useQuiz as jest.Mock).mockReturnValue({
      currentStep: 0,
      questions: [],
      resetQuiz: jest.fn(),
      showResults: true,
    });

    renderQuiz();
    expect(screen.getByText("Results")).toBeInTheDocument();
  });
});
