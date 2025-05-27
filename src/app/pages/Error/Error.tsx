import { Button } from "@/components/ui/button";

interface ErrorProps {
  onRetry: () => void;
}
export const Error = ({ onRetry }: ErrorProps) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center text-red-500 px-4">
      <p className="text-lg font-semibold mb-2">Oops! Something went wrong</p>
      <p className="mb-4">
        Sorry, we couldn’t load your questions. Please try again later
      </p>
      <Button variant="destructive" onClick={onRetry}>
        Try Again
      </Button>
    </div>
  );
};
