import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import useSWR from "swr";
import { Cuisines } from "../constants";

const Home: NextPage = () => {
  const tags: Cuisines = "Chinese";
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data } = useSWR(`/api/search-random-recipes`, fetcher);

  console.log(data);
  return (
    <>
      <div>hello</div>
    </>
  );
};

export default Home;
