import { Grid } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import useSWR from "swr";
import { SearchBar } from "../components";
import RecipeCard from "../components/home/RecipeCard";
import { Cuisines } from "../constants/cuisineTypes";
import { RandomRecipes } from "./api/search-random-recipes";

const Home: NextPage = () => {
  const tags: Cuisines = "Chinese";
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  // const { data } = useSWR<RandomRecipes>(`/api/search-random-recipes`, fetcher);

  return (
    <>
      <SearchBar />
      <Grid container gap={5} justifyContent="center">
        <Grid item>
          <RecipeCard />
        </Grid>
        <Grid item>
          <RecipeCard />
        </Grid>
        <Grid item>
          <RecipeCard />
        </Grid>
        <Grid item>
          <RecipeCard />
        </Grid>
        <Grid item>
          <RecipeCard />
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
