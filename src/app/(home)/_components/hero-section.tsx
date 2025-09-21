import Link from "next/link";
import Image from "next/image";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { H1 } from "@/components/layout/headers";
import { P1 } from "@/components/layout/paragraphs";
import { Section } from "@/components/layout/section";

import HeroSmall from "public/assets/images/small/image-home-hero.webp";
import HeroLarge from "public/assets/images/large/image-home-hero.webp";
import PatternSquiggle from "public/assets/images/icons/pattern-squiggle-1.svg";

export const HeroSection = () => {
  return (
    <Section
      className={cn(
        "flex flex-col gap-10 pt-12",
        "container:pt-0 lg:items-center lg:gap-20 lg:pb-24 lg:text-center",
      )}
    >
      <div className="space-y-8 lg:space-y-10">
        <div className="grid gap-3 lg:place-items-center">
          <H1>
            <span className="after:bg-orange/40 after:rounded-4 relative inline-block after:absolute after:bottom-1.5 after:left-0 after:-z-10 after:h-2/5 after:w-full md:after:bottom-0.5 md:after:h-1/2">
              Healthy
            </span>{" "}
            meals, zero fuss
          </H1>
          <P1 className="max-w-[52ch] lg:w-[48ch]">
            Discover eight quick, whole-food recipes that you can cook tonight—no processed junk, no
            guesswork.
          </P1>
        </div>
        <Button asChild>
          <Link href="/recipes">Start exploring</Link>
        </Button>
      </div>

      <div className="relative flex items-center justify-center">
        <PatternSquiggle
          className="container:block pointer-events-none absolute -top-66 left-1/2 -z-50 hidden -translate-x-1/2 rotate-[-4.8deg]"
          aria-hidden="true"
        />
        <Image
          src={HeroSmall}
          alt="A cheerful woman holding cucumber on a cutting board while cooking kitchen salad"
          className="rounded-12 w-full shadow-[0_0_0_5.5px_#FFF] lg:hidden"
          width={670}
          height={400}
          priority
        />
        <Image
          src={HeroLarge}
          alt="A cheerful woman holding cucumber on a cutting board while cooking kitchen salad"
          className="rounded-12 hidden object-cover shadow-[0_0_0_10px_#FFF] lg:block"
          width={1200}
          height={1080}
          priority
        />
      </div>
    </Section>
  );
};
