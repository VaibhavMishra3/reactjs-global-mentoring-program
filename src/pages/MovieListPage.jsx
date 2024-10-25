import React, { useState, useEffect } from "react";
import { useSearchParams, Outlet, useNavigate } from "react-router-dom";
// import SearchForm from "../components/SearchForm/SearchForm";
import GenreSelect from "../components/GenreSelect/GenreSelect";
import SortControl from "../components/SortControl/SortControl";
import MovieTile from "../components/MovieTile/MovieTile";
// import MovieDetails from "../components/MovieDetails/MovieDetails";
import Dialog from "../components/Dialog/Dialog";
import MovieForm from "../components/MovieForm/MovieForm";
import axios from "axios";
import "./MovieListPage.css";

function MovieListPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const searchQuery = searchParams.get("query") || ""; // Default to empty string
  const sortCriterion = searchParams.get("sortBy") || "release_date"; // Default to "release_date"
  const sortOrder = searchParams.get("sortOrder") || "asc"; // Default to "asc"
  const activeGenre = searchParams.get("genre") || "All"; // Default to "All"

  const [movieList, setMovieList] = useState([]);
  // const [selectedMovie, setSelectedMovie] = useState(null);

  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [movieToEdit, setMovieToEdit] = useState(null);
  const [movieToDelete, setMovieToDelete] = useState(null);

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

  // const handleSearch = (query) => {
  //   setSearchParams((prevParams) => {
  //     prevParams.set("query", query);
  //     return prevParams;
  //   });
  // };

  const handleGenreSelect = (genre) => {
    setSearchParams((prevParams) => {
      prevParams.set("genre", genre);
      return prevParams;
    });
  };

  const handleSortChange = (sort) => {
    setSearchParams((prevParams) => {
      prevParams.set("sortBy", sort);
      return prevParams;
    });
  };

  const handleSortOrderChange = (order) => {
    setSearchParams((prevParams) => {
      prevParams.set("sortOrder", order);
      return prevParams;
    });
  };

  const handleEditMovie = (movie) => {
    setMovieToEdit(movie);
    setIsEditDialogOpen(true);
  };

  const handleDeleteMovie = (movieId) => {
    setMovieToDelete(movieId);
    setIsDeleteDialogOpen(true);
  };

  // Navigate to the movie details page on click
  const handleMovieClick = (movie) => {
    navigate(`/${movie.id}`, {
      state: { from: window.location.pathname + window.location.search },
    });
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
      <button
        className="add-movie-button"
        onClick={() => setIsAddDialogOpen(true)}
      >
        + Add Movie
      </button>
      {/* Render MovieDetails if a movie is selected
      {selectedMovie ? (
        <MovieDetails
          movie={selectedMovie}
          onClose={() => setSelectedMovie(null)}
        />
      ) : (
        <>
          <h1>Find Your Movie</h1>
          <SearchForm initialQuery={searchQuery} onSearch={handleSearch} /> */}
    
         

          <div className="genre-select">
            <GenreSelect
              genres={["All", "Documentary", "Comedy", "Horror", "Crime"]}
              selectedGenre={activeGenre}
              onSelect={handleGenreSelect}
            />
          </div>
          <div className="sort-control">
            <SortControl
              currentSort={sortCriterion}
              currentOrder={sortOrder}
              onSortChange={handleSortChange}
              onSortOrderChange={handleSortOrderChange}
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
      {/* Add movie dialog */}
      {isAddDialogOpen && (
        <Dialog title="Add Movie" onClose={() => setIsAddDialogOpen(false)}>
          <MovieForm
            onSubmitSuccess={(newMovie) =>
              setMovieList([...movieList, newMovie])
            }
          />
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
        <Dialog
          title="Delete Movie"
          onClose={() => setIsDeleteDialogOpen(false)}
        >
          <p>Are you sure you want to delete this movie?</p>
          <button onClick={() => setIsDeleteDialogOpen(false)}>Cancel</button>
          <button onClick={handleDeleteConfirm}>Confirm</button>
        </Dialog>
      )}
      <Outlet />{" "}
      {/* This will be replaced with MovieDetails when a movie is selected */}
    </div>
  );
}

export default MovieListPage;
