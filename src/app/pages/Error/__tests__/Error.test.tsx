import { render, screen, fireEvent } from "@testing-library/react";
import { Error } from "../Error";

describe("Error", () => {
  it("renders error message", () => {
    render(<Error onRetry={() => {}} />);

    expect(screen.getByText(/oops! something went wrong/i)).toBeInTheDocument();
    expect(
      screen.getByText(
        /Sorry, we couldn’t load your questions. Please try again later/i
      )
    ).toBeInTheDocument();
  });

  it("calls onRetry when try again button is clicked", () => {
    const onRetry = jest.fn();
    render(<Error onRetry={onRetry} />);

    const tryAgainButton = screen.getByText("Try Again");
    expect(tryAgainButton).toBeInTheDocument();

    fireEvent.click(tryAgainButton);
    expect(onRetry).toHaveBeenCalled();
  });
});
