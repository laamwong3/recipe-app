import RestaurantMenuRoundedIcon from "@mui/icons-material/RestaurantMenuRounded";
import {
  Box,
  Container,
  CssBaseline,
  Stack,
  ThemeProvider,
  Typography,
} from "@mui/material";
import Link from "next/link";
import React from "react";
import darkTheme from "../../configs/darkTheme";
import SearchBar from "./SearchBar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Container maxWidth="lg">
          <Stack direction="column" gap={5}>
            <Link href={"/"}>
              <Stack direction={"row"} justifyContent={"center"}>
                <Typography variant="h3" sx={{ cursor: "pointer", padding: 2 }}>
                  <Box component={"span"}>
                    <RestaurantMenuRoundedIcon
                      fontSize="large"
                      color="primary"
                    />
                  </Box>{" "}
                  Recipes
                </Typography>
              </Stack>
            </Link>
            {children}
          </Stack>
        </Container>
      </ThemeProvider>
    </>
  );
};

export default Layout;
