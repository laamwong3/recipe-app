import * as fs from "fs";
import dotenv from "dotenv";
dotenv.config({ path: "../../.env.local" });
import randomRecipes from "./constants/randomRecipes.json";
import recipeDetails from "./constants/recipeDetails.json";
import fetch from "node-fetch";

// type RandomDetails = typeof randomDetails;
// type RandomRecipes = typeof randomRecipes;

interface RecipeDtails {
  [index: string]: object;
}

const fetchRandomRecipes = async () => {
  const url = `https://api.spoonacular.com/recipes/random?apiKey=${process.env.NEXT_PUBLIC_RECIPE_API_KEY}&number=20`;
  const response = await fetch(url);
  const data = await response.json();
  fs.writeFileSync(
    "../../constants/randomRecipes.json",
    JSON.stringify(data, null, 2)
  );
  // .then((res) => res.json())
  // .then((data) => {
  //   fs.writeFileSync(
  //     "../../constants/randomRecipes.json",
  //     JSON.stringify(data, null, 2)
  //   );
  // })
  // .catch((e) => console.log(e));
};

const fetchRecipesDtails = async () => {
  let tempArr = {} as RecipeDtails;

  await Promise.all(
    randomRecipes.recipes.map(async (recipe) => {
      // for (let recipe of randomRecipes.recipes) {
      let url = `https://api.spoonacular.com/recipes/${recipe.id}/information?apiKey=${process.env.NEXT_PUBLIC_RECIPE_API_KEY}&includeNutrition=false`;

      const response = await fetch(url);
      const data = await response.json();
      tempArr[recipe.id] = data;
      // }
    })
  );

  fs.writeFileSync(
    "./constants/recipeDetails.json",
    JSON.stringify(tempArr, null, 2)
  );
};

// const fetchRecipeInfo = async () => {
//   let tempArr = new Map<number, {}>();

//   await Promise.all(
//     randomRecipes.recipes.map(async (recipe) => {
//       const url = `https://api.spoonacular.com/recipes/${recipe.id}/information?apiKey=${process.env.NEXT_PUBLIC_RECIPE_API_KEY}&includeNutrition=false`;
//       let response = await fetch(url);
//       let data = await response.json();
//       tempArr.set(recipe.id, data);
//     })
//   );
//   fs.writeFileSync(
//     "./constants/recipeDetails.json",
//     JSON.stringify([...tempArr], null, 2)
//   );

//   randomDetails.map((each) => {
//     each.map((e) => {
//       console.log(e);
//     });
//   });
//   // for (let each of tempArr) {
//   //   console.log(each);
//   // }
// };

// const setToMap = async () => {
//   let myMap = new Map<number, RandomDetails>();

//   for (let value of randomDetails) {
//     for (let details of value) {
//       console.log(details);
//     }
//   }
// };

// const testMapping = async () => {
//   let arr = [1, 2, 3, 4, 5, 6, 7];
//   let tempArr = new Map<number, {}>();
//   await Promise.all(
//     arr.map((each) => {
//       tempArr.set(each, { a: 10 });
//     })
//   );
//   console.log(tempArr.values);
// };

// fetchRandomRecipes();

(async () => {
  // await fetchRecipeInfo();
  // setToMap();
  const start = performance.now();
  await fetchRandomRecipes();
  await fetchRecipesDtails();
  const end = performance.now();
  console.log(end - start);
})().catch((e) => console.log(e));
