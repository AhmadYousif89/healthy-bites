import { OurMissionSection } from "./_components/our-mission-section";
import { OurExistenceSection } from "./_components/our-existence-section";
import { OurPhilosophySection } from "./_components/our-philosophy-section";
import { OurBelieveSection } from "./_components/our-believe-section";
import { CTASection } from "@/components/cta-section";

export default function AboutPage() {
  return (
    <>
      <OurMissionSection />
      <hr className="border-neutral-300" />
      <OurExistenceSection />
      <hr className="border-neutral-300" />
      <OurPhilosophySection />
      <hr className="border-neutral-300" />
      <OurBelieveSection />
      <CTASection />
    </>
  );
}
