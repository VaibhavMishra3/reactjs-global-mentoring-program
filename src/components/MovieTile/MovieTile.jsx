import React from "react";

const MovieTile = ({ movie, onClick }) => {
  const { imageUrl, title, year, genres } = movie;

  return (
    <div className="movie-tile" onClick={() => onClick(movie)}>
      <img src={imageUrl} alt={`${title} poster`} />
      <div className="movie-info">
        <h4>{title}</h4>
        <p>{year}</p>
        <p>{genres.join(", ")}</p>
      </div>
    </div>
  );
};

export default MovieTile;
