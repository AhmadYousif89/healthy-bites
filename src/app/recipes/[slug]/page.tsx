import connectToDatabase from "@/lib/db";

import { Main } from "@/components/layout/main";
import { P1, P2 } from "@/components/layout/paragraphs";
import { Recipe } from "../types";
import { RecipeDetails } from "./_components/recipe-details";
import { H3 } from "@/components/layout/headers";
import { MoreRecipes } from "./_components/more-recipes";

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

  let content = null;

  if (!recipe) {
    content = (
      <P1 className="mt-20 grid text-center">
        <span className="text-3xl font-semibold">404</span>
        <span>The requested recipe could not be found.</span>
      </P1>
    );
  } else {
    const headingId = `${recipe.slug}-title`;
    content = (
      <>
        <section
          className="max-w-container mx-auto flex flex-col gap-4 pb-12 lg:pb-0"
          aria-labelledby={headingId}
        >
          <P2 className="flex items-center gap-1.5">
            <span className="text-primary/60">Recipes</span>
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
      </>
    );
  }

  return (
    <Main>
      <h1 className="sr-only">{recipe ? recipe.title : "Recipe Not Found"}</h1>
      <div className="grow px-4 py-12 md:px-8 lg:px-15 lg:pb-24 xl:px-0">{content}</div>
      <hr className="border-neutral-300" />
    </Main>
  );
}
