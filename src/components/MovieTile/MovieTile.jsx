import React from "react";
import "./MovieTile.css"; // Add your styles here

function MovieTile({ movie, onEdit, onDelete }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleEditClick = () => {
    onEdit(movie); // Pass the movie to the parent for editing
    setIsMenuOpen(false);
  };

  const handleDeleteClick = () => {
    onDelete(movie.id); // Pass the movie ID to the parent for deletion
    setIsMenuOpen(false);
  };

  return (
    <div className="movie-tile">
      <img src={movie.poster_path} alt={movie.title} className="movie-poster" />
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <span>{movie.release_date.split("-")[0]}</span>
      </div>
      <div className="three-dots" onClick={handleMenuToggle}>
        &#x2022;&#x2022;&#x2022;
      </div>
      {isMenuOpen && (
        <div className="context-menu">
          <div className="menu-item" onClick={handleEditClick}>
            Edit
          </div>
          <div className="menu-item" onClick={handleDeleteClick}>
            Delete
          </div>
        </div>
      )}
    </div>
  );
}

export default MovieTile;
