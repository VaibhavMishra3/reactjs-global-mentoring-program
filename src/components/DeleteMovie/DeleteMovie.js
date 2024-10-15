import React, { useState } from "react";
import axios from "axios";
import Dialog from "../Dialog/Dialog"

function DeleteMovie({ movieId, onDelete }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleDelete = async () => {
    try {
      // Make DELETE request to remove the movie
      await axios.delete(`https://localhost:4000/movies/${movieId}`);
      console.log("Movie deleted");
      onDelete();  // Call the onDelete function to update the UI or notify the parent component
      setIsOpen(false);
    } catch (error) {
      console.error("Error deleting movie:", error);
    }
  };

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Delete Movie</button>
      {isOpen && (
        <Dialog title="Delete Movie" onClose={() => setIsOpen(false)}>
          <div>
            <p>Are you sure you want to delete this movie?</p>
            <button onClick={() => setIsOpen(false)}>Cancel</button>
            <button onClick={handleDelete}>Confirm</button>
          </div>
        </Dialog>
      )}
    </>
  );
}

export default DeleteMovie;
