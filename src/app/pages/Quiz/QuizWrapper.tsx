import { CloseButton } from "@/components/ui/closeButton";
import { LoadingPage } from "@/components/ui/loadingPage";
import { useQuiz } from "@/context/QuizContext";
import { PropsWithChildren } from "react";

interface QuizWrapperProps extends PropsWithChildren {
  isLoading: boolean;
}
export const QuizWrapper = ({ isLoading, children }: QuizWrapperProps) => {
  const { setShowQuiz } = useQuiz();
  return (
    <div className="fixed inset-0 backdrop-blur-sm animate-in fade-in duration-500">
      <div
        className={`min-h-screen w-full flex flex-col relative transition-all duration-500 ${
          isLoading ? "bg-transparent" : "bg-white"
        }`}
      >
        <CloseButton handleClose={() => setShowQuiz(false)} />
        {isLoading ? <LoadingPage /> : children}
      </div>
    </div>
  );
};
