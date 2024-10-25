import React, { useState } from "react";
import Dialog from "../Dialog/Dialog";
import MovieForm from "../MovieForm/MovieForm";

const mockMovieData = {
  title: "Moana",
  releaseDate: "2016-11-14",
  movieUrl: "https://www.moana.com",
  rating: "7.6",
  genre: "Action",
  runtime: "1h 47min",
  overview: "Moana is a sea voyaging enthusiast...",
};

function EditMovie() {
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = (data) => {
    console.log("Edit movie:", data);
    setIsOpen(false);
  };

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Edit Movie</button>
      {isOpen && (
        <Dialog title="Edit Movie" onClose={() => setIsOpen(false)}>
          <MovieForm initialMovie={mockMovieData} onSubmit={handleSubmit} />
        </Dialog>
      )}
    </>
  );
}

export default EditMovie;
