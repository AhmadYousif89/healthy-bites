import { HeroSection } from "@/app/(home)/_components/hero-section";
import { HighlightsSection } from "./_components/highlights-section";
import { IntroSection } from "./_components/intro-section";
import { CTASection } from "@/components/cta-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <HighlightsSection />
      <hr className="hidden border-neutral-300 md:block" />
      <IntroSection />
      <CTASection />
    </>
  );
}
