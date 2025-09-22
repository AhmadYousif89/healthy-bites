import connectToDatabase from "@/lib/db";
import { Recipe, SearchParams } from "../types";

import { RecipeCard } from "./recipe-card";
import { P1, P2 } from "@/components/layout/paragraphs";

async function getRecipes(searchParams: SearchParams) {
  const params = await searchParams;
  const { pt, ct, search } = params;
  const maxPrepTime = pt ? parseInt(pt as string, 10) : null;
  const maxCookTime = ct ? parseInt(ct as string, 10) : null;
  const query = search ? (search as string).toLowerCase() : null;

  const filter: Record<string, any> = {};
  if (maxPrepTime !== null) {
    filter.prepMinutes = { $lte: maxPrepTime };
  }
  if (maxCookTime !== null) {
    filter.cookMinutes = { $lte: maxCookTime };
  }
  if (query) {
    filter.$or = [
      { title: { $regex: query, $options: "i" } },
      { ingredients: { $elemMatch: { $regex: query, $options: "i" } } },
    ];
  }

  try {
    const { db } = await connectToDatabase();
    const recipes = await db.collection<Recipe>("recipes").find(filter).toArray();

    return recipes;
  } catch (error) {
    console.error("Error fetching recipes:", error);
    return [];
  }
}

type Props = {
  searchParams: SearchParams;
};

export const Recipes = async ({ searchParams }: Props) => {
  const data = await getRecipes(searchParams);

  if (data.length === 0) {
    return (
      <P1 className="text-primary mt-8 text-center">
        No recipes found. <br /> Try adjusting your filters or search terms.
      </P1>
    );
  }

  return (
    <ul className="recipe-list">
      {data.map((recipe) => (
        <li key={recipe.id} className="flex w-full">
          <RecipeCard recipe={recipe} />
        </li>
      ))}
    </ul>
  );
};
