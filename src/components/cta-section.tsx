import Link from "next/link";

import { cn } from "@/lib/utils";

import { H2 } from "@/components/layout/headers";
import { P1 } from "@/components/layout/paragraphs";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";

export const CTASection = () => {
  return (
    <Section className="container:pt-0 px-4 pt-16 md:px-8 md:pt-20">
      <div
        className={cn(
          "rounded-16 relative isolate flex flex-col items-center gap-8 overflow-hidden bg-neutral-300 px-4 py-12 text-center md:gap-10 md:px-0 md:py-20 lg:py-24",
          'container:before:-bottom-6 container:before:bg-[315px_auto] before:absolute before:-bottom-46 before:-left-10 before:-z-10 before:hidden before:size-full before:bg-[url("/assets/images/icons/pattern-fork.svg")] before:bg-[179px_auto] before:bg-no-repeat md:before:block lg:before:-bottom-32 lg:before:-left-16 lg:before:bg-[250px_auto]',
          "container:after:top-10 container:after:bg-[315px_auto] after:absolute after:-top-10 after:-right-2 after:-z-10 after:hidden after:size-full after:bg-[url('/assets/images/icons/pattern-knife.svg')] after:bg-[179px_auto] after:bg-top-right after:bg-no-repeat md:after:block lg:after:top-6 lg:after:-right-16 lg:after:bg-[250px_auto]",
        )}
      >
        <div className="space-y-3">
          <H2>Ready to cook smarter?</H2>
          <P1>Hit the button, pick a recipe, and get dinner on the table—fast.</P1>
        </div>
        <Button asChild className="h-14.25 w-44 p-0 text-sm leading-140">
          <Link href="/recipes">Browse Recipes</Link>
        </Button>
      </div>
    </Section>
  );
};
