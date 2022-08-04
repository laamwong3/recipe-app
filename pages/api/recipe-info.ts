// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export interface RecipeInfo {
  vegetarian?: boolean;
  vegan?: boolean;
  glutenFree?: boolean;
  dairyFree?: boolean;
  veryHealthy?: boolean;
  cheap?: boolean;
  veryPopular?: boolean;
  sustainable?: boolean;
  lowFodmap?: boolean;
  weightWatcherSmartPoints?: number;
  gaps?: string;
  preparationMinutes?: number;
  cookingMinutes?: number;
  aggregateLikes?: number;
  healthScore?: number;
  pricePerServing?: number;
  extendedIngredients?: ExtendedIngredient[];
  id?: number;
  title?: string;
  readyInMinutes?: number;
  servings?: number;
  sourceUrl?: string;
  image?: string;
  imageType?: string;
  summary?: string;
  cuisines?: string[];
  dishTypes?: string[];
  diets?: string[];
  occasions?: any[];
  winePairing?: WinePairing;
  instructions?: string;
  analyzedInstructions?: AnalyzedInstruction[];
  sourceName?: null;
  creditsText?: null;
  originalId?: null;
}

export interface AnalyzedInstruction {
  name?: string;
  steps?: Step[];
}

export interface Step {
  number?: number;
  step?: string;
  ingredients?: Ent[];
  equipment?: Ent[];
  length?: Length;
}

export interface Ent {
  id?: number;
  name?: string;
  localizedName?: string;
  image?: string;
  temperature?: Length;
}

export interface Length {
  number?: number;
  unit?: string;
}

export interface ExtendedIngredient {
  id?: number;
  aisle?: string;
  image?: string;
  consistency?: Consistency;
  name?: string;
  nameClean?: string;
  original?: string;
  originalName?: string;
  amount?: number;
  unit?: Unit;
  meta?: string[];
  measures?: Measures;
}

export enum Consistency {
  Liquid = "LIQUID",
  Solid = "SOLID",
}

export interface Measures {
  us?: Metric;
  metric?: Metric;
}

export interface Metric {
  amount?: number;
  unitShort?: Unit;
  unitLong?: Unit;
}

export enum Unit {
  Servings = "servings",
}

export interface WinePairing {}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<RecipeInfo>
) {
  const url = `https://api.spoonacular.com/recipes/${req.query.id}/information?apiKey=${process.env.NEXT_PUBLIC_RECIPE_API_KEY}&includeNutrition=false`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => res.status(200).json(data))
    .catch((e) => console.log(e));
}
