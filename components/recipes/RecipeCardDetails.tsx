import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Image from "next/image";
import { Theme, useMediaQuery, useTheme } from "@mui/material";
// import randomRecipes from "../../constants/randomRecipes.json";
import recipeDetails from "../../constants/recipeDetails.json";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const imageSize = 600;

interface RecipeCardDetailsProps {
  id: string | string[] | undefined;
}
// type RandomRecipes = typeof randomRecipes.recipes[0];
type RecipeDetails = typeof recipeDetails;

interface Details {
  title: string;
  summary: string;
  instruction: string;
  image: string;
}

export default function RecipeCardDetails({ id }: RecipeCardDetailsProps) {
  const [expanded, setExpanded] = React.useState(false);
  const [details, setDetails] = React.useState<Details>();
  // const theme = useTheme();
  // const matches = useMediaQuery((theme: Theme) => theme.breakpoints.up("sm"));

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  React.useEffect(() => {
    const tempDetails = Object.entries(recipeDetails).filter(
      (data) => data[0] === id
    );
    tempDetails.map((info) => {
      setDetails({
        title: info[1].title,
        instruction: info[1].instructions,
        summary: info[1].summary,
        image: info[1].image,
      });
    });
  }, []);

  // React.useEffect(() => {
  //   const tempDetails = randomRecipes.recipes.filter(
  //     (data) => data.id.toString() === id
  //   );
  //   setDetails(tempDetails[0]);
  // }, []);
  // console.log(matches);
  // console.log(theme.breakpoints.values);
  return (
    <Card sx={{ maxWidth: imageSize * 2, borderRadius: 3, mb: 5 }}>
      <CardHeader
        // avatar={
        //   <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
        //     R
        //   </Avatar>
        // }
        // action={
        //   <IconButton aria-label="settings">
        //     <MoreVertIcon />
        //   </IconButton>
        // }
        title={details?.title ?? ""}
      />
      <Image
        src={
          details?.image ??
          "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg"
        }
        height={imageSize}
        width={imageSize * 2}
        objectFit="cover"
      />
      <CardContent>
        <Typography
          variant="h6"
          color="text.secondary"
          component={"div"}
          paragraph
          dangerouslySetInnerHTML={{ __html: details?.summary ?? "" }}
        ></Typography>
      </CardContent>
      <CardActions disableSpacing>
        {/* <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton> */}
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography variant="h4" paragraph>
            Instruction:
          </Typography>
          <Typography
            variant="h5"
            paragraph
            component={"div"}
            dangerouslySetInnerHTML={{ __html: details?.instruction ?? "" }}
          ></Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
