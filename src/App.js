import React, { useState } from "react";
import Counter from "./components/Counter/Counter";
import SearchForm from "./components/SearchForm/SearchForm";
import GenreSelect from "./components/GenreSelect/GenreSelect";
import MovieTile from "./components/MovieTile/MovieTile";
import MovieDetails from "./components/MovieDetails/MovieDetails";
import SortControl from "./components/SortControl/SortControl";

// Example mock data
const movies = [
  {
    id: 1,
    imageUrl: "https://via.placeholder.com/150",
    title: "Pulp Fiction",
    year: 1994,
    genres: ["Action", "Drama"],
    rating: 8.9,
    duration: "2h 34min",
    description: "Jules Winnfield and Vincent Vega are hit men...",
  },
  {
    id: 2,
    imageUrl: "https://via.placeholder.com/150",
    title: "Bohemian Rhapsody",
    year: 2018,
    genres: ["Drama", "Biography", "Music"],
    rating: 7.9,
    duration: "2h 14min",
    description: "A chronicle of the years leading up to Queen's appearance...",
  },
];

function App() {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [currentSort, setCurrentSort] = useState("releaseDate");

  const handleSearch = (query) => {
    console.log(`Search query: ${query}`);
    // Add search functionality here
  };

  const handleGenreSelect = (genre) => {
    console.log(`Selected genre: ${genre}`);
    // Filter or update movie list based on selected genre
  };

  // Handle when a movie tile is clicked
  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
  };

  // Handle changes in the sort control
  const handleSortChange = (sortValue) => {
    setCurrentSort(sortValue);
    // Implement logic to sort movies based on sortValue
  };

  return (
    <div>
      {/* Existing Components */}
      <Counter initialValue={0} />
      <SearchForm initialQuery="React" onSearch={handleSearch} />
      <GenreSelect
        genres={["All", "Documentary", "Comedy", "Horror", "Crime"]}
        selectedGenre="All"
        onSelect={handleGenreSelect}
      />

      {/* New Components */}

      {/* SortControl Component */}
      <SortControl currentSort={currentSort} onSortChange={handleSortChange} />

      {/* MovieDetails Component */}
      {selectedMovie && <MovieDetails movie={selectedMovie} />}

      {/* List of MovieTile Components */}
      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          marginTop: "20px",
        }}
      >
        {movies.map((movie) => (
          <MovieTile key={movie.id} movie={movie} onClick={handleMovieClick} />
        ))}
      </div>
    </div>
  );
}

export default App;
