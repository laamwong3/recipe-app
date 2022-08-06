import fs from "fs";
import dotenv from "dotenv";
dotenv.config({ path: "../../.env.local" });
import randomRecipes from "./constants/randomRecipes.json";

// console.log(process.env.NEXT_PUBLIC_RECIPE_API_KEY);

const fetchRandomRecipes = () => {
  const url = `https://api.spoonacular.com/recipes/random?apiKey=${process.env.NEXT_PUBLIC_RECIPE_API_KEY}&number=20`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      fs.writeFileSync(
        "../../constants/randomRecipes.json",
        JSON.stringify(data, null, 2)
      );
    })
    .catch((e) => console.log(e));
};

const fetchRecipeInfo = () => {
  let tempArr = new Map();
  randomRecipes.recipes.map((each) => {
    const url = `https://api.spoonacular.com/recipes/${each.id}/information?apiKey=${process.env.NEXT_PUBLIC_RECIPE_API_KEY}&includeNutrition=false`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => tempArr.push())
      .catch((e) => console.log(e));
  });
};

// fetchRandomRecipes();
fetchRecipeInfo();
