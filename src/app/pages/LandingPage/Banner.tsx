import { cn } from "@/lib/utils";
import Image from "next/image";

interface BannerProps {
  step: string;
  imageSide: "right" | "left";
  category: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

export const Banner = ({
  step,
  imageSide,
  category,
  title,
  description,
  imageAlt,
  imageSrc,
}: BannerProps) => {
  return (
    <section className="relative bg-white pb-[90px] px-6 md:px-[238px] overflow-hidden">
      <div
        className={cn(
          `absolute md:text-[450px] font-bold text-[#E8EFE9] opacity-80 top-10 left-6 md:top-1/2 md:-translate-y-[60%] pointer-events-none select-none z-0`,
          imageSide === "left" ? "md:left-1/3" : "md:left-1/5"
        )}
      >
        {step}
      </div>

      <div className="container relative z-10 mx-auto flex flex-col md:flex-row items-center">
        <div
          className={cn(
            imageSide === "right" && "md:w-1/2 md:order-2 mb-8 md:mb-0"
          )}
        >
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={370}
            height={445}
            className="w-full h-auto md:min-w-[370px] mb-8 md:mb-0"
          />
        </div>

        <div
          className={cn(
            "text-[#0B3B3C]",
            `md:w-1/2`,
            imageSide === "left" ? "md:ml-[123px]" : "md:order-1 md:mr-[123px]"
          )}
        >
          <p className="uppercase text-gray-700 text-[10px] font-bold leading-[15px] tracking-[0.15em] mb-3">
            {category}
          </p>
          <h2 className="mb-4 font-normal text-[28px] leading-[40px] tracking-[-0.03em]">
            {title}
          </h2>
          <p className="font-normal text-[18px] leading-[30px] tracking-[0em]">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};
