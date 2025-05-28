import { Banner } from "./Banner";
import { Footer } from "./Footer";
import { Hero } from "./Hero";

export const LandingPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <h2 className="my-[70px] text-[40px] w-full text-center">
        What we can help with
      </h2>
      <Banner
        step={"01"}
        imageSide="left"
        imageAlt="Hair loss image"
        imageSrc="/section1.png"
        category="Hair loss"
        title="Hair loss needn’t be irreversible. We can help!"
        description=" We’re working around the clock to bring you a holistic approach to your wellness. From top to bottom, inside and out."
      />

      <Banner
        step={"02"}
        imageSide="right"
        imageAlt="Erectile dysfunction image"
        imageSrc="/section2.png"
        category="Erectile dysfunction"
        title="Erections can be a tricky thing. But no need to feel down!"
        description={`We’re working around the clock to bring you a holistic approach to
              your wellness. From top to bottom, inside and out.`}
      />
      <Footer />
    </div>
  );
};
