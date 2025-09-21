import { ObjectId } from "mongodb";

export type SearchParams = Promise<Record<string, string | string[] | undefined>>;

export type Recipe = {
  _id: ObjectId;
  id: number;
  title: string;
  slug: string;
  image: { small: string; large: string };
  overview: string;
  servings: number;
  prepMinutes: number;
  cookMinutes: number;
  ingredients: string[];
  instructions: string[];
};
