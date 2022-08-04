import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

const imageSize = 200;

export default function RecipeCard() {
  const router = useRouter();
  return (
    <Card
      sx={{ maxWidth: imageSize * 1.5, borderRadius: 3 }}
      component={motion.div}
      whileHover={{
        scale: 1.2,
        // rotate: [0, 360, 0],
        // scaleZ: 2,
        // transition: { duration: 1 },
      }}
    >
      <CardActionArea onClick={() => router.push(`/recipes/id`)}>
        <Image
          src={"https://spoonacular.com/recipeImages/649977-556x370.jpg"}
          height={imageSize}
          width={imageSize * 1.5}
          objectFit="fill"
        />

        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
