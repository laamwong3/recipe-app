// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export interface SearchRecipes {
  results?: Result[];
  offset?: number;
  number?: number;
  totalResults?: number;
}

export interface Result {
  id?: number;
  title?: string;
  image?: string;
  imageType?: ImageType;
}

export enum ImageType {
  Jpg = "jpg",
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<SearchRecipes>
) {
  const url = `https://api.spoonacular.com/recipes/complexSearch?query=${req.query.keyword}&cuisine=${req.query.cuisine}&apiKey=${process.env.NEXT_PUBLIC_RECIPE_API_KEY}&number=20`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => res.status(200).json(data))
    .catch((e) => console.log(e));
}
