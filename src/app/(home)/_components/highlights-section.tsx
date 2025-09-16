import { H2, H3 } from "@/components/layout/headers";
import { P1 } from "@/components/layout/paragraphs";
import { Section } from "@/components/layout/section";

import WholeFoodIcon from "public/assets/images/icons/icon-whole-food-recipes.svg";
import MinFussIcon from "public/assets/images/icons/icon-minimum-fuss.svg";
import SearchInSecIcon from "public/assets/images/icons/icon-search-in-seconds.svg";

export const HighlightsSection = () => {
  return (
    <Section className="grid gap-8 pt-16 md:gap-12 md:py-20 lg:pt-0 lg:pb-24">
      <H2 className="lg:text-center">What you’ll get</H2>

      <div className="grid gap-6 md:gap-8 lg:grid-flow-col">
        <div className="space-y-5 md:space-y-6">
          <span className="bg-card rounded-12 shadow-2 flex size-[60px] items-center justify-center ring-1 ring-neutral-300">
            <WholeFoodIcon />
          </span>
          <div className="space-y-3">
            <H3>Whole-food recipes</H3>
            <P1>Each dish uses everyday, unprocessed ingredients.</P1>
          </div>
        </div>
        <div className="space-y-5 md:space-y-6">
          <span className="bg-card rounded-12 shadow-2 flex size-[60px] items-center justify-center ring-1 ring-neutral-300">
            <MinFussIcon />
          </span>
          <div className="space-y-3">
            <H3>Minimum fuss</H3>
            <P1>All recipes are designed to make eating healthy quick and easy.</P1>
          </div>
        </div>
        <div className="space-y-5 md:space-y-6">
          <span className="bg-card rounded-12 shadow-2 flex size-[60px] items-center justify-center ring-1 ring-neutral-300">
            <SearchInSecIcon />
          </span>
          <div className="space-y-3">
            <H3>Search in seconds</H3>
            <P1>Filter by name or ingredient and jump straight to the recipe you need.</P1>
          </div>
        </div>
      </div>
    </Section>
  );
};
