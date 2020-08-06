import React from "react";

//styles
import { SearchBarStyled } from "../styles";

const SearchBar = ({ setQuery }) => {
  return (
    <SearchBarStyled
      placeholder="Search.."
      onChange={(event) => setQuery(event.target.value)}
    />
  );
};

export default SearchBar;