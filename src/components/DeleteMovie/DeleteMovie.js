import React, { useState } from "react";
import Dialog from "./Dialog";

function DeleteMovie({ onDelete }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleDelete = () => {
    console.log("Movie deleted");
    onDelete();
    setIsOpen(false);
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
