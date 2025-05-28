import { render, screen, fireEvent } from "@testing-library/react";
import { Results } from "../Results";
import { QuizProvider } from "@/context/QuizContext";
import * as QuizContext from "@/context/QuizContext";

// Mock QuizContext
jest.mock("@/context/QuizContext", () => ({
  ...jest.requireActual("@/context/QuizContext"),
  useQuiz: jest.fn(),
}));

const renderResults = (hasRejection = false) => {
  const onCloseQuiz = jest.fn();

  // Mock the quiz context
  (QuizContext.useQuiz as jest.Mock).mockReturnValue({
    hasRejection,
  });

  return {
    onCloseQuiz,
    ...render(
      <QuizProvider>
        <Results onCloseQuiz={onCloseQuiz} />
      </QuizProvider>
    ),
  };
};

describe("Results", () => {
  beforeEach(() => {
    // Reset
    jest.clearAllMocks();
  });

  it("renders negative feedback when hasRejection is true", () => {
    renderResults(true);

    expect(screen.getByTestId("negative-feedback")).toBeInTheDocument();
  });

  it("renders positive feedback when hasRejection is false", () => {
    renderResults(false);

    expect(screen.getByTestId("positive-feedback")).toBeInTheDocument();
  });

  it("shows close quiz button in both cases", () => {
    const { onCloseQuiz } = renderResults(true);
    const closeButton = screen.getByText("Close quiz");
    expect(closeButton).toBeInTheDocument();

    fireEvent.click(closeButton);
    expect(onCloseQuiz).toHaveBeenCalled();
  });

  it("shows manual.co link when hasRejection is false", () => {
    renderResults(false);

    const link = screen.getByText("Go to Manual.co");
    expect(link).toBeInTheDocument();
    expect(link.closest("a")).toHaveAttribute("href", "https://www.manual.co");
  });

  it("does not show manual.co link when hasRejection is true", () => {
    renderResults(true);

    expect(screen.queryByText("Go to Manual.co")).not.toBeInTheDocument();
  });
});
