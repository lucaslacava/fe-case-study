import { CloseButton } from "@/components/ui/closeButton";
import { LoadingPage } from "@/components/ui/loadingPage";
import { useQuiz } from "@/context/QuizContext";
import { PropsWithChildren } from "react";

interface QuizWrapperProps extends PropsWithChildren {
  isLoading: boolean;
}
export const QuizWrapper = ({ isLoading, children }: QuizWrapperProps) => {
  const { resetQuiz } = useQuiz();
  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
      <div
        className={`relative h-screen w-full flex flex-col transition-all duration-500 ${
          isLoading ? "bg-transparent" : "bg-white"
        }`}
      >
        <CloseButton handleClose={() => resetQuiz()} />
        {isLoading ? (
          <LoadingPage />
        ) : (
          <div className="flex-1 overflow-hidden">{children}</div>
        )}
      </div>
    </div>
  );
};
