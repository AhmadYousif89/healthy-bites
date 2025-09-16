import Image from "next/image";

import HeroRealLifeSmall from "public/assets/images/small/image-home-real-life.webp";
import HeroRealLifeLarge from "public/assets/images/large/image-home-real-life.webp";

import { H2 } from "@/components/layout/headers";
import { P1 } from "@/components/layout/paragraphs";
import { Section } from "@/components/layout/section";

export const IntroSection = () => {
  return (
    <Section className="flex flex-col gap-8 pt-16 md:gap-10 md:pt-20 lg:flex-row lg:items-center lg:gap-12 lg:py-24">
      <div className="space-y-5">
        <H2 className="site:leading-16">Built for real life</H2>
        <P1>
          Cooking shouldn’t be complicated. These recipes come in under{" "}
          <span className="after:bg-orange after:rounded-4 relative inline-block after:absolute after:bottom-1.5 after:left-0 after:-z-10 after:h-1/3 after:w-full md:after:bottom-1 md:after:h-2/5">
            30 minutes
          </span>{" "}
          of active time, fit busy schedules, and taste good enough to repeat.
        </P1>
        <P1>Whether you’re new to the kitchen or just need fresh ideas, we’ve got you covered.</P1>
      </div>

      <picture className="rounded-12 md:rounded-16 container:min-w-[635px] overflow-hidden">
        <source media="(min-width: 768px)" srcSet={HeroRealLifeLarge.src} />
        <Image
          className="w-full"
          src={HeroRealLifeSmall.src}
          alt="A person cooking in a kitchen"
          width={HeroRealLifeSmall.width}
          height={HeroRealLifeSmall.height}
          priority
        />
      </picture>
    </Section>
  );
};
