import { Grid } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import useSWR from "swr";
import { SearchBar } from "../components";
import RecipeCard from "../components/home/RecipeCard";
import { Cuisines } from "../constants/cuisineTypes";
// import { RandomRecipes } from "./api/search-random-recipes";
import { useEffect } from "react";
import randomRecipes from "../constants/randomRecipes.json";

export type RandomRecipes = typeof randomRecipes.recipes[0];

const Home: NextPage = () => {
  const tags: Cuisines = "Chinese";
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data } = useSWR<RandomRecipes>(`/api/search-random-recipes`, fetcher);
  // console.log(data);

  useEffect(() => {}, [data]);
  return (
    <>
      <SearchBar />
      <Grid container gap={5} justifyContent="center" sx={{ marginBottom: 5 }}>
        {randomRecipes &&
          randomRecipes.recipes.map((recipe, index) => (
            <Grid item key={index}>
              <RecipeCard recipe={recipe} />
            </Grid>
          ))}
      </Grid>
    </>
  );
};

export default Home;
