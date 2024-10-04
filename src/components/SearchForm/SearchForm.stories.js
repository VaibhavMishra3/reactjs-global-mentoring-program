import React from "react";
import SearchForm from "./SearchForm";

export default {
  title: "Components/SearchForm",
  component: SearchForm,
};

export const Default = () => (
  <SearchForm
    initialQuery="Search a movie"
    onSearch={(query) => alert(query)}
  />
);
