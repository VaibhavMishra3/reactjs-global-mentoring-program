import React, { useState, useEffect } from "react";
import SearchForm from "../components/SearchForm/SearchForm";
import GenreSelect from "../components/GenreSelect/GenreSelect";
import SortControl from "../components/SortControl/SortControl";
import MovieTile from "../components/MovieTile/MovieTile";
import MovieDetails from "../components/MovieDetails/MovieDetails";
import Dialog from "../components/Dialog/Dialog";
import MovieForm from "../components/MovieForm/MovieForm";
import DeleteMovie from "../components/DeleteMovie/DeleteMovie";
import axios from "axios";
import "./MovieListPage.css";

function MovieListPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortCriterion, setSortCriterion] = useState("release_date");
  const [sortOrder, setSortOrder] = useState("asc");
  const [activeGenre, setActiveGenre] = useState("All");
  const [movieList, setMovieList] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [movieToEdit, setMovieToEdit] = useState(null);
  const [movieToDelete, setMovieToDelete] = useState(null);

  // Fetch movies from the backend
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get("http://localhost:4000/movies", {
          params: {
            sortBy: sortCriterion,
            sortOrder: sortOrder,
            search: searchQuery || undefined,
            searchBy: "title",
            filter: activeGenre !== "All" ? activeGenre : undefined,
            limit: 10,
            offset: 0,
          },
        });
        setMovieList(response.data.data);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, [searchQuery, sortCriterion, sortOrder, activeGenre]);

  // Handlers for edit and delete
  const handleEditMovie = (movie) => {
    setMovieToEdit(movie);
    setIsEditDialogOpen(true);
  };

  const handleDeleteMovie = (movieId) => {
    setMovieToDelete(movieId);
    setIsDeleteDialogOpen(true);
  };

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
  };

  const handleDeleteConfirm = async () => {
    try {
      await axios.delete(`http://localhost:4000/movies/${movieToDelete}`);
      setMovieList(movieList.filter((movie) => movie.id !== movieToDelete));
    } catch (error) {
      console.error("Error deleting movie:", error);
    }
    setIsDeleteDialogOpen(false);
  };

  const handleEditSubmit = async (data) => {
    try {
      const response = await axios.put(
        `http://localhost:4000/movies/${movieToEdit.id}`,
        data
      );
      setMovieList(
        movieList.map((movie) =>
          movie.id === movieToEdit.id ? response.data : movie
        )
      );
    } catch (error) {
      console.error("Error editing movie:", error);
    }
    setIsEditDialogOpen(false);
  };

  return (
    <div className="movie-list-page">
      {/* Add movie button */}
      <button className="add-movie-button" onClick={() => setIsAddDialogOpen(true)}>
        + Add Movie
      </button>

      {/* Render MovieDetails if a movie is selected */}
      {selectedMovie ? (
        <MovieDetails
          movie={selectedMovie}
          onClose={() => setSelectedMovie(null)}
        />
      ) : (
        <>
          <h1>Find Your Movie</h1>
          <SearchForm initialQuery={searchQuery} onSearch={setSearchQuery} />
          <div className="genre-select">
            <GenreSelect genres={["All", "Documentary", "Comedy", "Horror", "Crime"]} selectedGenre={activeGenre} onSelect={setActiveGenre} />
          </div>
          <div className="sort-control">
            <SortControl
              currentSort={sortCriterion}
              currentOrder={sortOrder}
              onSortChange={setSortCriterion}
              onSortOrderChange={setSortOrder}
            />
          </div>

          {/* Movie List */}
          <div className="movie-grid">
            {movieList.map((movie) => (
              <MovieTile
                key={movie.id}
                movie={movie}
                onEdit={handleEditMovie}
                onDelete={handleDeleteMovie}
                onClick={() => handleMovieClick(movie)}
              />
            ))}
          </div>
        </>
      )}

      {/* Add movie dialog */}
      {isAddDialogOpen && (
        <Dialog title="Add Movie" onClose={() => setIsAddDialogOpen(false)}>
          <MovieForm onSubmitSuccess={(newMovie) => setMovieList([...movieList, newMovie])} />
        </Dialog>
      )}

      {/* Edit movie dialog */}
      {isEditDialogOpen && (
        <Dialog title="Edit Movie" onClose={() => setIsEditDialogOpen(false)}>
          <MovieForm initialMovie={movieToEdit} onSubmit={handleEditSubmit} />
        </Dialog>
      )}

      {/* Delete movie confirmation dialog */}
      {isDeleteDialogOpen && (
        <Dialog title="Delete Movie" onClose={() => setIsDeleteDialogOpen(false)}>
          <p>Are you sure you want to delete this movie?</p>
          <button onClick={() => setIsDeleteDialogOpen(false)}>Cancel</button>
          <button onClick={handleDeleteConfirm}>Confirm</button>
        </Dialog>
      )}
    </div>
  );
}

export default MovieListPage;
