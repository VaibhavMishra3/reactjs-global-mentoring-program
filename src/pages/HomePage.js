import React, { useState } from "react";
import SearchForm from "../components/SearchForm/SearchForm";
import SortControl from "../components/SortControl/SortControl";
import GenreSelect from "../components/GenreSelect/GenreSelect";
import MovieTile from "../components/MovieTile/MovieTile";
import MovieForm from "../components/MovieForm/MovieForm";
import MovieDetails from "../components/MovieDetails/MovieDetails";
import Dialog from "../components/Dialog/Dialog"; // Assuming you implemented Dialog as previously discussed
import "./HomePage.css"; // Optional for styling

// Mock movie data
const movies = [
  {
    id: 1,
    title: "Pulp Fiction",
    genre: "Crime",
    releaseDate: "1994",
    rating: "8.9",
    runtime: "2h 34min",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    title: "Bohemian Rhapsody",
    genre: "Drama",
    releaseDate: "2018",
    rating: "7.9",
    runtime: "2h 14min",
    imageUrl: "https://via.placeholder.com/150",
  },
  // Add more mock data as necessary...
];

function HomePage() {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [filterGenre, setFilterGenre] = useState("All");
  const [sortOption, setSortOption] = useState("releaseDate");

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
    window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to the top of the page
  };

  // Handlers for various actions
  const handleSearch = (query) => {
    console.log(`Search query: ${query}`);
  };

  const handleGenreSelect = (genre) => {
    setFilterGenre(genre);
  };

  const handleSortChange = (option) => {
    setSortOption(option);
  };

  const handleEditClick = (movie) => {
    setSelectedMovie(movie);
    setIsEditOpen(true);
  };

  const handleDeleteClick = (movie) => {
    setSelectedMovie(movie);
    setIsDeleteOpen(true);
  };

  const filteredMovies = movies
    .filter((movie) => filterGenre === "All" || movie.genre === filterGenre)
    .sort((a, b) =>
      sortOption === "releaseDate"
        ? a.releaseDate - b.releaseDate
        : b.rating - a.rating
    );

  return (
    <div className="homepage">
      {/* Conditionally render MovieDetails */}
      {selectedMovie && (
        <div className="movie-details-container">
          <MovieDetails
            movie={selectedMovie}
            onClose={() => setSelectedMovie(null)}
          />
        </div>
      )}
      {/* Header */}
      <div className="header">
        <h1>Find Your Movie</h1>
        <SearchForm initialQuery="" onSearch={handleSearch} />
        <button className="add-movie-btn" onClick={() => setIsAddOpen(true)}>
          + Add Movie
        </button>
      </div>

      {/* GenreSelect and SortControl */}
      <div className="controls">
        <GenreSelect
          genres={["All", "Documentary", "Comedy", "Horror", "Crime"]}
          selectedGenre={filterGenre}
          onSelect={handleGenreSelect}
        />
        <SortControl currentSort={sortOption} onSortChange={handleSortChange} />
      </div>

      {/* Movie Tiles */}
      <div className="movie-cards">
        {filteredMovies.map((movie) => (
          <MovieTile
            key={movie.id}
            movie={movie}
            onClick={() => handleMovieClick(movie)}
            onEdit={() => handleEditClick(movie)}
            onDelete={() => handleDeleteClick(movie)}
          />
        ))}
      </div>

      {/* Modals for Add, Edit, and Delete */}
      {isAddOpen && (
        <Dialog title="Add Movie" onClose={() => setIsAddOpen(false)}>
          <MovieForm onSubmit={(data) => console.log("Movie added", data)} />
        </Dialog>
      )}
      {isEditOpen && (
        <Dialog title="Edit Movie" onClose={() => setIsEditOpen(false)}>
          <MovieForm
            initialMovie={selectedMovie}
            onSubmit={(data) => console.log("Movie edited", data)}
          />
        </Dialog>
      )}
      {isDeleteOpen && (
        <Dialog title="Delete Movie" onClose={() => setIsDeleteOpen(false)}>
          <p>Are you sure you want to delete {selectedMovie?.title}?</p>
          <button onClick={() => console.log("Movie deleted")}>Confirm</button>
          <button onClick={() => setIsDeleteOpen(false)}>Cancel</button>
        </Dialog>
      )}
    </div>
  );
}

export default HomePage;
