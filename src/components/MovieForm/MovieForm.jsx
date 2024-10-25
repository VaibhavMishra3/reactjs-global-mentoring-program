import React, { useState } from "react";
import "./MovieForm.css"; // Add your styles here

const genresList = ["Crime", "Documentary", "Horror", "Comedy"]; // Example genres

const MovieForm = ({ onSubmitSuccess, initialMovieInfo = {} }) => {
  const [title, setTitle] = useState(initialMovieInfo.title || "");
  const [releaseDate, setReleaseDate] = useState(
    initialMovieInfo.releaseDate || ""
  );
  const [movieUrl, setMovieUrl] = useState(initialMovieInfo.movieUrl || "");
  const [rating, setRating] = useState(initialMovieInfo.rating || "");
  const [runtime, setRuntime] = useState(initialMovieInfo.runtime || "");
  const [overview, setOverview] = useState(initialMovieInfo.overview || "");
  const [selectedGenres, setSelectedGenres] = useState(
    initialMovieInfo.genres || []
  );

  const handleGenreChange = (genre) => {
    if (selectedGenres.includes(genre)) {
      setSelectedGenres(selectedGenres.filter((g) => g !== genre));
    } else {
      setSelectedGenres([...selectedGenres, genre]);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newMovie = {
      title,
      releaseDate,
      movieUrl,
      rating,
      runtime,
      overview,
      genres: selectedGenres,
    };
    // Simulate successful form submission
    onSubmitSuccess(newMovie);
  };

  return (
    <form className="movie-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label>Release Date</label>
        <input
          type="date"
          value={releaseDate}
          onChange={(e) => setReleaseDate(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label>Movie URL</label>
        <input
          type="url"
          value={movieUrl}
          onChange={(e) => setMovieUrl(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label>Rating</label>
        <input
          type="number"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          step="0.1"
          min="0"
          max="10"
          required
        />
      </div>

      <div className="form-group">
        <label>Runtime (minutes)</label>
        <input
          type="number"
          value={runtime}
          onChange={(e) => setRuntime(e.target.value)}
          min="1"
          required
        />
      </div>

      <div className="form-group">
        <label>Genre</label>
        <div className="genre-select">
          {genresList.map((genre) => (
            <div key={genre} className="genre-option">
              <input
                type="checkbox"
                checked={selectedGenres.includes(genre)}
                onChange={() => handleGenreChange(genre)}
              />
              <label>{genre}</label>
            </div>
          ))}
        </div>
        {selectedGenres.length === 0 && (
          <p className="error-message">Select at least one genre to proceed</p>
        )}
      </div>

      <div className="form-group">
        <label>Overview</label>
        <textarea
          value={overview}
          onChange={(e) => setOverview(e.target.value)}
          required
        />
      </div>

      <div className="form-buttons">
        <button type="reset" className="reset-button">
          Reset
        </button>
        <button
          type="submit"
          className="submit-button"
          disabled={selectedGenres.length === 0}
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default MovieForm;
