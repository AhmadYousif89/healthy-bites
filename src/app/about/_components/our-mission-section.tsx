import Image from "next/image";

import { H2 } from "@/components/layout/headers";
import { P1 } from "@/components/layout/paragraphs";
import { Section } from "@/components/layout/section";

import OurMissionSmall from "public/assets/images/small/image-about-our-mission.webp";
import OurMissionLarge from "public/assets/images/large/image-about-our-mission.webp";
import PatternSquiggle2 from "public/assets/images/icons/pattern-squiggle-2.svg";

export const OurMissionSection = () => {
  return (
    <Section className="container:pt-0 container:pb-24 container:items-center container:flex-row relative isolate flex flex-col gap-10 pt-12 pb-16 md:gap-16 md:pt-16 md:pb-20">
      <div className="space-y-6">
        <H2 className="grid gap-6">
          <span className="text-md rounded-6 tracking-neg-05 bg-orange w-fit px-1.5 py-0.5 leading-140 font-bold">
            Our Mission
          </span>
          <p>
            <span>Help more people cook </span>
            {/* <br /> */}
            <span>nourshing meals, </span>
            {/* <br /> */}
            <span>more often.</span>
          </p>
        </H2>
        <div className="space-y-4">
          <P1>
            Healthy Recipe Finder was created to prove that healthy eating can be convenient,
            affordable, and genuinely delicious.
          </P1>
          <P1>
            We showcase quick, whole-food dishes that anyone can master—no fancy equipment, no
            ultra-processed shortcuts—just honest ingredients and straightforward steps.
          </P1>
        </div>
      </div>
      <div className="rounded-12 container:min-w-[618px] overflow-hidden">
        <picture>
          <source media="(min-width: 768px)" srcSet={OurMissionLarge.src} />
          <Image
            src={OurMissionSmall.src}
            alt="A person pouring a sauce over a dish"
            width={OurMissionSmall.width}
            height={OurMissionSmall.height}
            className="size-full"
            priority
          />
        </picture>
      </div>
      <span className="container:block site:-right-22.5 absolute top-1/2 -right-14.5 hidden w-[210px] -translate-y-3">
        <PatternSquiggle2 className="size-fit" />
      </span>
    </Section>
  );
};
