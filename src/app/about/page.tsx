import { Metadata } from "next";

import { Main } from "@/components/layout/main";
import { OurMissionSection } from "./_components/our-mission-section";
import { OurExistenceSection } from "./_components/our-existence-section";
import { OurPhilosophySection } from "./_components/our-philosophy-section";
import { OurBelieveSection } from "./_components/our-believe-section";
import { CTASection } from "@/components/cta-section";

export const metadata: Metadata = {
  title: "About Healthy Bites: Our Mission, Philosophy, and Commitment to Nourishing Recipes",
  description:
    "Learn about Healthy Bites' mission to provide nutritious and delicious recipes. Discover our philosophy, values, and dedication to promoting healthy eating habits for a better lifestyle.",
};

export default function AboutPage() {
  return (
    <Main className="container:mt-20">
      <h1 className="sr-only">
        About Healthy Bites: Our Mission, Philosophy, and Commitment to Nourishing Recipes
      </h1>
      <OurMissionSection />
      <hr className="border-neutral-300" />
      <OurExistenceSection />
      <hr className="border-neutral-300" />
      <OurPhilosophySection />
      <hr className="border-neutral-300" />
      <OurBelieveSection />
      <CTASection />
    </Main>
  );
}
