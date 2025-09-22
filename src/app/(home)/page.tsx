import { Metadata } from "next";

import { Main } from "@/components/layout/main";
import { HeroSection } from "./_components/hero-section";
import { HighlightsSection } from "./_components/highlights-section";
import { IntroSection } from "./_components/intro-section";
import { CTASection } from "@/components/cta-section";

export const metadata: Metadata = {
  title: "Healthy Bites - Your Gateway to Nutritious and Delicious Recipes",
  description:
    "Discover a world of healthy and delicious recipes tailored to your dietary needs. From quick meals to gourmet dishes, Healthy Bites has something for everyone.",
};

export default function Home() {
  return (
    <Main className="container:mt-20 max-3xl:overflow-hidden">
      <HeroSection />
      <HighlightsSection />
      <hr className="hidden border-neutral-300 md:block" />
      <IntroSection />
      <CTASection />
    </Main>
  );
}
