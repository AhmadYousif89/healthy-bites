import Link from "next/link";
import { Metadata } from "next";
import { notFound } from "next/navigation";

import { Recipe } from "../types";
import connectToDatabase from "@/lib/db";
import { Main } from "@/components/layout/main";
import { H3 } from "@/components/layout/headers";
import { P2 } from "@/components/layout/paragraphs";
import { MoreRecipes } from "./_components/more-recipes";
import { RecipeDetails } from "./_components/recipe-details";

export async function generateMetadata({
  params,
}: PageProps<"/recipes/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const recipe = await getRecipeBySlug(slug);
  if (!recipe) {
    return {
      title: "Recipe Not Found - Healthy Bites",
      description: "The recipe you are looking for does not exist.",
      robots: "noindex",
    };
  }

  return {
    title: `${recipe.title} - Healthy Bites`,
    description: recipe.overview,
  };
}

async function getRecipeBySlug(slug: string) {
  try {
    const { db } = await connectToDatabase();
    const recipe = await db.collection<Recipe>("recipes").findOne({ slug });
    return recipe;
  } catch (error) {
    console.error("Error fetching recipe:", error);
    return null;
  }
}

export default async function RecipePage({ params }: PageProps<"/recipes/[slug]">) {
  const { slug } = await params;
  const recipe = await getRecipeBySlug(slug);

  if (!recipe) {
    return notFound();
  }

  const headingId = `${recipe.slug}-title`;

  return (
    <Main>
      <h1 className="sr-only">{recipe ? recipe.title : "Recipe Not Found"}</h1>
      <div className="grow px-4 py-12 md:px-8 lg:px-15 lg:pb-24 xl:px-0">
        <section
          className="max-w-container mx-auto flex flex-col gap-4 pb-12 lg:pb-0"
          aria-labelledby={headingId}
        >
          <P2 className="flex items-center gap-1.5">
            <Link
              href="/recipes"
              className="text-primary/60 underline-offset-2 hover:underline focus:underline"
            >
              Recipes
            </Link>
            <span className="text-primary/60">/</span>
            <span className="truncate">{recipe.title}</span>
          </P2>

          <RecipeDetails recipe={recipe} />
        </section>
        <hr className="border-neutral-300 lg:my-16" />
        <section
          className="max-w-container @container mx-auto flex flex-col gap-6 pt-12 lg:pt-0"
          aria-labelledby="more-recipes"
        >
          <H3 id="more-recipes">More recipes</H3>
          <MoreRecipes currentRecipeId={recipe._id.toString()} />
        </section>
      </div>
      <hr className="border-neutral-300" />
    </Main>
  );
}
