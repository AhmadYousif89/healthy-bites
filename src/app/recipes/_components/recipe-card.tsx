import Link from "next/link";
import Image from "next/image";

import { Recipe } from "../types";
import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { P3 } from "@/components/layout/paragraphs";

import ServingsIcon from "public/assets/images/icons/icon-servings.svg";
import PrepTimeIcon from "public/assets/images/icons/icon-prep-time.svg";
import CookTimeIcon from "public/assets/images/icons/icon-cook-time.svg";

type RecipeCardProps = { recipe: Recipe } & React.ComponentProps<"article">;

export const RecipeCard = ({ recipe }: RecipeCardProps) => {
  const headingId = `${recipe.slug}-title`;

  return (
    <article
      aria-labelledby={headingId}
      className="bg-card shadow-3 flex w-full flex-col justify-between gap-4 rounded p-2"
    >
      <div className="grid gap-4">
        <picture>
          <source
            media="(min-width: 768px)"
            srcSet={recipe.image.large}
            width={1024}
            height={1024}
          />
          <Image
            src={recipe.image.small}
            alt={recipe.title}
            width={500}
            height={500}
            className="aspect-square w-full rounded object-cover xl:max-h-[300px]"
          />
        </picture>
        <div className="space-y-4 px-2">
          <div className="space-y-2.5">
            <h3 className="text-md tracking-neg-05 text-primary leading-140 font-bold xl:max-w-[340px] xl:truncate">
              {recipe.title}
            </h3>
            <P3>{recipe.overview}</P3>
          </div>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <div className="flex items-center gap-1.5">
              <ServingsIcon />
              <span className="tracking-neg-03 text-primary text-xs leading-150 font-medium">
                Servings: {recipe.servings}
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <PrepTimeIcon />
              <span className="tracking-neg-03 text-primary text-xs leading-150 font-medium">
                Prep: {recipe.prepMinutes} mins
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <CookTimeIcon />
              <span className="tracking-neg-03 text-primary text-xs leading-150 font-medium">
                Cook: {recipe.cookMinutes} mins
              </span>
            </div>
          </div>
        </div>
      </div>
      <Button asChild className="h-12 w-full rounded-full">
        <Link href={`/recipes/${recipe.slug}`} aria-label={`View recipe for ${recipe.title}`}>
          View Recipe
        </Link>
      </Button>
    </article>
  );
};
