import { Button } from "@/components/ui/button";
import { useQuiz } from "@/context/QuizContext";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

interface ResultsProps {
  onCloseQuiz: () => void;
}

export function Results({ onCloseQuiz }: ResultsProps) {
  const { hasRejection } = useQuiz();

  return (
    <div className="h-full flex items-center justify-center p-8">
      <div className="max-w-2xl w-full space-y-8">
        <h1 className="text-3xl font-bold text-center">Results</h1>

        <div className="text-center space-y-4">
          {hasRejection ? (
            <div className="space-y-4">
              <p className="text-lg" data-testid="negative-feedback">
                Unfortunately, we are unable to prescribe this medication for
                you. This is because finasteride can alter the PSA levels, which
                may be used to monitor for cancer. You should discuss this
                further with your GP or specialist if you would still like this
                medication.
              </p>
              <Button onClick={onCloseQuiz} className="w-full mt-8">
                Close quiz
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              <p className="text-lg" data-testid="positive-feedback">
                Great news! We have the perfect treatment for your hair loss.
                <br />
                Proceed to{" "}
                <a
                  className="underline"
                  href="https://www.manual.co"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.manual.co
                </a>
                , and prepare to say hello to your new hair!
              </p>
              <Button asChild className="w-full">
                <Link
                  href="https://www.manual.co"
                  className="flex items-center justify-center gap-2"
                >
                  Go to Manual.co
                  <ExternalLink className="size-5" />
                </Link>
              </Button>
              <Button
                variant="ghost"
                onClick={onCloseQuiz}
                className="w-full mt-8"
              >
                Close quiz
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
