import React, { useState } from "react";
import Dialog from "./Dialog";
import MovieForm from "./MovieForm";

function AddMovie() {
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = (data) => {
    console.log("Add movie:", data);
    setIsOpen(false);
  };

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Add Movie</button>
      {isOpen && (
        <Dialog title="Add Movie" onClose={() => setIsOpen(false)}>
          <MovieForm onSubmit={handleSubmit} />
        </Dialog>
      )}
    </>
  );
}

export default AddMovie;
