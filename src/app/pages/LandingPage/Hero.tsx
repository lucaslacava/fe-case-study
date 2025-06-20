import { Button } from "@/components/ui/button";
import { useQuiz } from "@/context/QuizContext";
import Image from "next/image";

export const Hero = () => {
  const { setShowQuiz } = useQuiz();

  const handleStartQuiz = () => {
    setShowQuiz(true);
  };
  return (
    <section className="flex flex-col">
      <div
        className="relative w-full h-screen bg-cover bg-center flex items-center justify-start px-6"
        style={{ backgroundImage: "url('/hero.png')" }}
      >
        <div className="absolute top-8 left-[138px] w-[40px] h-[40px]">
          <Image
            src="/manual-logo.svg"
            alt="Manual logo"
            fill
            className="object-contain"
          />
        </div>

        <div className="max-w-xl p-4 md:p-0 md:pl-[114px] mt-20">
          <h1 className="text-3xl md:text-[90px] font-normal text-[#0B3B3C] text-heading-90 md:tracking-[-3px]">
            Be good to yourself
          </h1>
          <p className="mt-5 text-base md:text-lg mb-9">
            We’re working around the clock to bring you a holistic approach to
            your wellness. From top to bottom, inside and out.
          </p>
          <Button
            onClick={handleStartQuiz}
            className="px-8 py-6 text-lg bg-[#7E0707] text-white rounded-none uppercase hover:bg-[#7E0707]"
          >
            <span className="py-4 px-7">Take the Quiz</span>
          </Button>
        </div>
      </div>
    </section>
  );
};
