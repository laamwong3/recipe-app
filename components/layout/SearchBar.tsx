import { Autocomplete, Stack, TextField } from "@mui/material";
import { useState } from "react";
import { cuisines } from "../../constants/cuisineDetails";
import { useInput } from "../../contexts/InputContext";

const SearchBar = () => {
  const { cuisine, keyword, setCuisine, setKeyword } = useInput();
  console.log(keyword);
  console.log(cuisine);
  return (
    <>
      <Stack direction={{ xs: "column", md: "row" }} gap={{ xs: 2, md: 0 }}>
        <TextField
          label="Search for recipes"
          variant="outlined"
          placeholder="Please enter a keyword"
          value={keyword}
          onChange={(e) => {
            e.preventDefault();
            setKeyword(e.target.value);
          }}
          sx={{ flex: 2 }}
        />
        <Autocomplete
          options={cuisines}
          sx={{ flex: 1 }}
          value={cuisine}
          onChange={(e, value) => {
            e.preventDefault();
            if (value !== null) setCuisine(value);
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Cuisine"
              placeholder="Select a cuisine"
            />
          )}
        />
      </Stack>
    </>
  );
};

export default SearchBar;
