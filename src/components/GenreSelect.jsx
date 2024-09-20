import React from "react";
import "./GenreSelect.css"; // Assuming you'll handle custom styling in this file

function GenreSelect({ genres, selectedGenre, onSelect }) {
  return (
    <div className="genre-container">
      {genres.map((genre) => (
        <button
          key={genre}
          className={`genre-button ${
            genre === selectedGenre ? "selected" : ""
          }`}
          onClick={() => onSelect(genre)}
        >
          {genre}
        </button>
      ))}
    </div>
  );
}

export default GenreSelect;
