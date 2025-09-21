import { Suspense } from "react";

import { Main } from "@/components/layout/main";
import { H2 } from "@/components/layout/headers";
import { P1 } from "@/components/layout/paragraphs";
import { Section } from "@/components/layout/section";

import { Recipes } from "./_components/recipes";
import { SearchInput } from "./_components/search-input";
import { PrepTimeMenu } from "./_components/preptime-dropdown";
import { CookTimeMenu } from "./_components/cooktime-dropdown";
import { RecipesSkeleton } from "./_components/recipes.skeleton";

export default async function RecipesPage({ searchParams }: PageProps<"/recipes">) {
  return (
    <Main className="container:mt-20">
      <h1 className="sr-only">Healthy Bites Recipes - Simple, Whole-Food Meals for Busy Lives</h1>
      <Section aria-labelledby="explore-recipes" className="container:pt-0 py-12 md:pt-16 lg:pb-16">
        <div className="grid space-y-3 lg:place-items-center">
          <H2 id="explore-recipes">Explore our simple, healthy recipes</H2>
          <P1 className="lg:max-w-[724px] lg:text-center">
            Discover eight quick, whole-food dishes that fit real-life schedules and taste amazing.
            Use the search bar to find a recipe by name or ingredient, or simply scroll the list and
            let something delicious catch your eye.
          </P1>
        </div>
      </Section>

      <Section aria-labelledby="filters-heading" className="grow space-y-6 md:pb-12 lg:pb-24">
        <h3 id="filters-heading" className="sr-only">
          Filter recipes
        </h3>
        <div className="flex flex-col justify-between gap-3 md:flex-row lg:gap-4">
          <div className="flex flex-col gap-3 md:flex-row lg:gap-4">
            <PrepTimeMenu />
            <CookTimeMenu />
          </div>
          <SearchInput />
        </div>

        <Suspense fallback={<RecipesSkeleton />}>
          <Recipes searchParams={searchParams} />
        </Suspense>
      </Section>

      <hr className="hidden border-neutral-300 lg:block" />
    </Main>
  );
}
