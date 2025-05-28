import { render, screen } from "@testing-library/react";
import { ProgressBar } from "../progressBar";

describe("ProgressBar", () => {
  it("renders with correct step information", () => {
    render(<ProgressBar currentStep={2} totalSteps={5} />);

    expect(screen.getByTestId("progress-bar")).toBeInTheDocument();
    expect(screen.getByText("Question 3 of 5")).toBeInTheDocument();
  });

  it("renders with first step", () => {
    render(<ProgressBar currentStep={0} totalSteps={5} />);

    expect(screen.getByText("Question 1 of 5")).toBeInTheDocument();
  });

  it("renders with last step", () => {
    render(<ProgressBar currentStep={4} totalSteps={5} />);

    expect(screen.getByText("Question 5 of 5")).toBeInTheDocument();
  });

  it("renders with correct progress value", () => {
    render(<ProgressBar currentStep={2} totalSteps={5} />);

    const progressBar = screen.getByRole("progressbar");
    expect(progressBar).toHaveAttribute("aria-valuenow", "75"); // (2 + 1) * 25 = 75
  });
});
