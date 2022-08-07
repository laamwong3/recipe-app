import { Stack } from "@mui/material";
import { NextPage } from "next";
import { useRouter } from "next/router";
import RecipeCardDetails from "../../components/recipes/RecipeCardDetails";

const Recipe: NextPage = () => {
  const router = useRouter();
  // console.log(router.query.recipe);
  return (
    <>
      <Stack direction={"row"} justifyContent="center">
        <RecipeCardDetails id={router.query.recipe} />
      </Stack>
    </>
  );
};

export default Recipe;
