import React from "react";
import SortControl from "./SortControl";

export default {
  title: "Components/SortControl",
  component: SortControl,
};

export const Default = () => (
  <SortControl
    currentSort="releaseDate"
    onSortChange={(sort) => alert(`Sorted by: ${sort}`)}
  />
);
