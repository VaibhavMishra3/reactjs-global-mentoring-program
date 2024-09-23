import React from "react";
import Counter from "./components/Counter";
import SearchForm from "./components/SearchForm";
import GenreSelect from "./components/GenreSelect";

function App() {
  const handleSearch = (query) => {
    console.log(`Search query: ${query}`);
  };

  const handleGenreSelect = (genre) => {
    console.log(`Selected genre: ${genre}`);
  };

  return (
    <div>
      <Counter initialValue={0} />
      <SearchForm initialQuery="React" onSearch={handleSearch} />
      <GenreSelect
        genres={["All", "Documentary", "Comedy", "Horror", "Crime"]}
        selectedGenre="All"
        onSelect={handleGenreSelect}
      />
    </div>
  );
}

export default App;
