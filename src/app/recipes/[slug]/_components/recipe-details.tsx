import Image from "next/image";

import { Recipe } from "../../types";
import { P1, P2 } from "@/components/layout/paragraphs";
import { H2, H4 } from "@/components/layout/headers";

import ServingsIcon from "public/assets/images/icons/icon-servings.svg";
import PrepTimeIcon from "public/assets/images/icons/icon-prep-time.svg";
import CookTimeIcon from "public/assets/images/icons/icon-cook-time.svg";

import BulletPointIcon from "public/assets/images/icons/icon-bullet-point.svg";

function getLearnMoreLinks(title: string) {
  const q = encodeURIComponent(title);
  return [
    {
      href: `https://www.allrecipes.com/search?q=${q}`,
      label: "AllRecipes",
      caption: "Discover similar recipes",
    },
    {
      href: `https://www.seriouseats.com/search?q=${q}`,
      label: "Serious Eats",
      caption: "Technique & tips",
    },
    {
      href: `https://www.bbcgoodfoodme.com/search-results?q=${q}`,
      label: "BBC Good Food",
      caption: "Guides & how-tos",
    },
    {
      href: `https://www.youtube.com/results?search_query=${q} recipe`,
      label: "YouTube",
      caption: "Videos about the recipe",
    },
  ];
}

export const RecipeDetails = ({ recipe }: { recipe: Recipe }) => {
  const headingId = `${recipe.slug}-title`;

  return (
    <article aria-labelledby={headingId} className="flex flex-col gap-10 lg:flex-row">
      <picture className="lg:sticky lg:top-20 lg:self-start">
        <source media="(min-width: 768px)" srcSet={recipe.image.large} width={1024} height={1024} />
        <Image
          src={recipe.image.small}
          alt={recipe.title}
          width={500}
          height={500}
          className="rounded-16 w-full lg:max-w-[580px]"
        />
      </picture>
      <div className="container:max-w-[572px] space-y-5">
        <H2 id={headingId}>{recipe.title}</H2>
        <P1>{recipe.overview}</P1>
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-1.5">
            <ServingsIcon />
            <span className="tracking-neg-03 text-primary text-sm leading-150 font-semibold">
              Servings: {recipe.servings}
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <PrepTimeIcon />
            <span className="tracking-neg-03 text-primary text-sm leading-150 font-semibold">
              Prep: {recipe.prepMinutes} mins
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <CookTimeIcon />
            <span className="tracking-neg-03 text-primary text-sm leading-150 font-semibold">
              Cook: {recipe.cookMinutes} mins
            </span>
          </div>
        </div>
        <div className="space-y-4">
          <H4>Ingredients:</H4>
          <ul className="grid gap-2">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index} className="flex gap-2">
                <span className="grid size-6 justify-center">
                  <BulletPointIcon className="size-fit" />
                </span>
                <P1>{ingredient}</P1>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-4">
          <H4>Instructions:</H4>
          <ul className="grid gap-2">
            {recipe.instructions.map((instruction, index) => (
              <li key={index} className="flex gap-2">
                <span className="grid size-6 justify-center">
                  <BulletPointIcon className="size-fit" />
                </span>
                <P1>{instruction}</P1>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-4">
          <H4>Learn more:</H4>
          {(() => {
            const titleForSearch = recipe.title || recipe.slug.replace(/-/g, " ");
            const links = getLearnMoreLinks(titleForSearch);
            return (
              <ul className="grid gap-2">
                {links.map((l) => (
                  <li key={l.href}>
                    <P2 className="flex items-center gap-2">
                      <span>{l.label}: </span>
                      <a
                        className="decoration-primary/40 text-xs font-medium underline hover:no-underline"
                        href={l.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {l.caption}
                      </a>
                    </P2>
                  </li>
                ))}
              </ul>
            );
          })()}
        </div>
      </div>
    </article>
  );
};
