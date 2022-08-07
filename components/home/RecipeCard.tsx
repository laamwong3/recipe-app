import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Stack } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { RandomRecipes } from "../../pages";

interface RecipeCardProps {
  recipe: RandomRecipes;
}

const imageSize = 200;

export default function RecipeCard({ recipe }: RecipeCardProps) {
  const router = useRouter();
  // console.log(recipe);
  return (
    <Card
      sx={{
        maxWidth: imageSize * 1.5,
        borderRadius: 3,
        height: imageSize * 2,
      }}
      component={motion.div}
      whileHover={{
        scale: 1.2,
        // rotate: [0, 360, 0],
        // scaleZ: 2,
        // transition: { duration: 1 },
      }}
    >
      <CardActionArea
        onClick={() => router.push(`/recipes/${recipe.id}`)}
        sx={{ display: "flex", flexDirection: "column", height: "100%" }}
      >
        <Image
          src={recipe.image}
          height={imageSize}
          width={imageSize * 1.5}
          objectFit="fill"
        />
        <CardContent
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            direction: "column",
          }}
        >
          <Typography
            variant="h6"
            component="div"
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            {recipe.title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
