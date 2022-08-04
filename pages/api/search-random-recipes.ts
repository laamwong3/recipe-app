// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export interface RandomRecipes {
  recipes?: Recipe[];
}

export interface Recipe {
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
  gaps?: Gaps;
  preparationMinutes?: number;
  cookingMinutes?: number;
  aggregateLikes?: number;
  healthScore?: number;
  creditsText?: CreditsText | null;
  license?: License;
  sourceName?: SourceName | null;
  pricePerServing?: number;
  extendedIngredients?: ExtendedIngredient[];
  id?: number;
  title?: string;
  readyInMinutes?: number;
  servings?: number;
  sourceUrl?: string;
  image?: string;
  imageType?: ImageType;
  summary?: string;
  cuisines?: string[];
  dishTypes?: string[];
  diets?: string[];
  occasions?: string[];
  instructions?: string;
  analyzedInstructions?: AnalyzedInstruction[];
  originalId?: null;
  spoonacularSourceUrl?: string;
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
  unit?: Unit;
}

export enum Unit {
  Celsius = "Celsius",
  Fahrenheit = "Fahrenheit",
  Minutes = "minutes",
}

export enum CreditsText {
  FoodistaCOMTheCookingEncyclopediaEveryoneCanEdit = "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
  FullBellySisters = "Full Belly Sisters",
  JenWest = "Jen West",
  LisaSVegetarianKitchen = "Lisa's Vegetarian Kitchen",
}

export interface ExtendedIngredient {
  id?: number;
  aisle?: null | string;
  image?: null | string;
  consistency?: Consistency;
  name?: string;
  nameClean?: null | string;
  original?: string;
  originalName?: string;
  amount?: number;
  unit?: string;
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
  unitShort?: string;
  unitLong?: string;
}

export enum Gaps {
  GapsFull = "GAPS_FULL",
  No = "no",
}

export enum ImageType {
  Jpg = "jpg",
}

export enum License {
  CcBy25CA = "CC BY 2.5 CA",
  CcBy30 = "CC BY 3.0",
  CcBySa30 = "CC BY-SA 3.0",
}

export enum SourceName {
  FoodAndSpice = "Food and Spice",
  Foodista = "Foodista",
  FullBellySisters = "Full Belly Sisters",
  PinkWhen = "Pink When",
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<RandomRecipes>
) {
  const url = `https://api.spoonacular.com/recipes/random?apiKey=${process.env.NEXT_PUBLIC_RECIPE_API_KEY}&number=20`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => res.status(200).json(data))
    .catch((e) => console.log(e));
}
