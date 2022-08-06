import fs from "fs";
import dotenv from "dotenv";
dotenv.config({ path: "../../.env.local" });
import randomRecipes from "./constants/randomRecipes.json";
import randomDetails from "./constants/recipeDetails.json";

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

const fetchRecipeInfo = async () => {
  let tempArr = new Map<number, {}>();

  await Promise.all(
    randomRecipes.recipes.map(async (recipe) => {
      const url = `https://api.spoonacular.com/recipes/${recipe.id}/information?apiKey=${process.env.NEXT_PUBLIC_RECIPE_API_KEY}&includeNutrition=false`;
      let response = await fetch(url);
      let data = await response.json();
      tempArr.set(recipe.id, data);
    })
  );
  fs.writeFileSync(
    "./constants/recipeDetails.json",
    JSON.stringify([...tempArr], null, 2)
  );

  randomDetails.map((each) => {
    each.map((e) => {
      console.log(e);
    });
  });
  // for (let each of tempArr) {
  //   console.log(each);
  // }
};

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
  await fetchRecipeInfo();
})();
