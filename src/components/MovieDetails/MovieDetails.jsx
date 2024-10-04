import React from "react";

const MovieDetails = ({ movie }) => {
  const { imageUrl, title, year, rating, duration, description } = movie;

  return (
    <div className="movie-details">
      <img src={imageUrl} alt={`${title} poster`} />
      <div className="details-info">
        <h2>{title}</h2>
        <p>{rating}</p>
        <p>{year}</p>
        <p>{duration}</p>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default MovieDetails;
