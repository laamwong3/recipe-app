import { Stack } from "@mui/material";
import { NextPage } from "next";
import RecipeCardDetails from "../../components/recipes/RecipeCardDetails";

const Recipe: NextPage = () => {
  return (
    <>
      <Stack direction={"row"} justifyContent="center">
        <RecipeCardDetails />
      </Stack>
    </>
  );
};

export default Recipe;
