import { ObjectId } from "mongodb";
import connectToDatabase from "@/lib/db";

import { Recipe } from "../../types";
import { RecipeCard } from "../../_components/recipe-card";

async function getMoreRecipes(currentRecipeId: string, limit = 3) {
  try {
    const { db } = await connectToDatabase();

    const current = await db
      .collection<Recipe>("recipes")
      .findOne({ _id: new ObjectId(currentRecipeId) });

    if (!current) return [];

    const currentIngredients = (current.ingredients ?? []).map((i) => i.toLowerCase());

    // If no ingredients, just return any others
    if (currentIngredients.length === 0) {
      return await db
        .collection<Recipe>("recipes")
        .find({ _id: { $ne: current._id } })
        .limit(limit)
        .toArray();
    }

    const pipeline: any[] = [
      { $match: { _id: { $ne: current._id } } },
      {
        $addFields: {
          ingredientOverlap: {
            $size: {
              $setIntersection: [
                {
                  $map: {
                    input: { $ifNull: ["$ingredients", []] },
                    as: "ing",
                    in: { $toLower: "$$ing" },
                  },
                },
                currentIngredients,
              ],
            },
          },
        },
      },
      { $match: { ingredientOverlap: { $gt: 0 } } },
      { $sort: { ingredientOverlap: -1, _id: -1 } },
      { $limit: limit },
      { $project: { ingredientOverlap: 0 } },
    ];

    let recipes = await db.collection<Recipe>("recipes").aggregate<Recipe>(pipeline).toArray();

    // If not enough recipes with overlapping ingredients, fill the rest upto the limit
    if (recipes.length < limit) {
      const excludeIds = [current._id, ...recipes.map((r) => r._id)];
      const additionalRecipes = await db
        .collection<Recipe>("recipes")
        .find({ _id: { $nin: excludeIds } })
        .sort({ _id: -1 })
        .limit(limit - recipes.length)
        .toArray();
      recipes = recipes.concat(additionalRecipes);
    }

    return recipes;
  } catch (error) {
    console.error("Error fetching more recipes:", error);
    return [];
  }
}

export const MoreRecipes = async ({ currentRecipeId }: { currentRecipeId: string }) => {
  const moreRecipes = await getMoreRecipes(currentRecipeId);

  return (
    <ul className="recipe-list">
      {moreRecipes.map((r) => (
        <li key={r.id} className="flex w-full">
          <RecipeCard recipe={r} />
        </li>
      ))}
    </ul>
  );
};
