import React from "react";

function MovieTile({ movie, onClick, onEdit, onDelete }) {
  return (
    <div className="movie-tile" onClick={onClick}>
      <img src={movie.imageUrl} alt={movie.title} />
      <div className="movie-info">
        <h4>{movie.title}</h4>
        <p>
          {movie.genre} | {movie.releaseDate}
        </p>
        {/* <p>Rating: {movie.rating}</p> */}
        {/* Ensure genres is defined and is an array */}
        <p>
          Genres:{" "}
          {Array.isArray(movie.genres) ? movie.genres.join(", ") : "N/A"}
        </p>
      </div>
      <div className="movie-card-actions">
        <button onClick={onEdit}>Edit</button>
        <button onClick={onDelete}>Delete</button>
      </div>
    </div>
  );
}

export default MovieTile;
