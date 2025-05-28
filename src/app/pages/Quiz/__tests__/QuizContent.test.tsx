import { render, screen, fireEvent } from "@testing-library/react";
import { QuizContent } from "../QuizContent";
import { QuizProvider } from "@/context/QuizContext";
import * as QuizContext from "@/context/QuizContext";

const mockQuestions = [
  {
    question: "Test Question 1",
    type: "ChoiceType",
    options: [
      { display: "Option 1", value: "1", isRejection: false },
      { display: "Option 2", value: "2", isRejection: false },
    ],
  },
  {
    question: "Test Question 2",
    type: "ChoiceType",
    options: [
      { display: "Option 3", value: "3", isRejection: false },
      { display: "Option 4", value: "4", isRejection: false },
    ],
  },
];

// Mock QuizContext
jest.mock("@/context/QuizContext", () => ({
  ...jest.requireActual("@/context/QuizContext"),
  useQuiz: jest.fn(),
}));

const renderQuizContent = () => {
  return render(
    <QuizProvider>
      <QuizContent />
    </QuizProvider>
  );
};

describe("QuizContent", () => {
  beforeEach(() => {
    // Reset
    jest.clearAllMocks();

    // Default mock implementation
    (QuizContext.useQuiz as jest.Mock).mockReturnValue({
      currentStep: 0,
      questions: mockQuestions,
      handleBack: jest.fn(),
      answers: [],
    });
  });

  it("renders the current question", () => {
    renderQuizContent();
    expect(screen.getByText("Test Question 1")).toBeInTheDocument();
  });

  it("renders all options for the current question", () => {
    renderQuizContent();
    expect(screen.getByText("Option 1")).toBeInTheDocument();
    expect(screen.getByText("Option 2")).toBeInTheDocument();
  });

  it("shows back button when not on first question", () => {
    (QuizContext.useQuiz as jest.Mock).mockReturnValue({
      currentStep: 1,
      questions: mockQuestions,
      handleBack: jest.fn(),
      answers: [],
    });

    renderQuizContent();
    expect(screen.getByText("Back")).toBeInTheDocument();
  });

  it("hides back button on first question", () => {
    renderQuizContent();
    expect(screen.queryByText("Back")).not.toBeInTheDocument();
  });

  it("calls handleBack when back button is clicked", () => {
    const handleBack = jest.fn();
    (QuizContext.useQuiz as jest.Mock).mockReturnValue({
      currentStep: 1,
      questions: mockQuestions,
      handleBack,
      answers: [],
    });

    renderQuizContent();
    fireEvent.click(screen.getByText("Back"));
    expect(handleBack).toHaveBeenCalled();
  });
});
