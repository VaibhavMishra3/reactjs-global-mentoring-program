import React from "react";

function MovieForm({ initialMovie = {}, onSubmit }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target));
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title</label>
        <input
          type="text"
          name="title"
          defaultValue={initialMovie.title || ""}
          required
        />
      </div>
      <div>
        <label>Release Date</label>
        <input
          type="date"
          name="releaseDate"
          defaultValue={initialMovie.releaseDate || ""}
          required
        />
      </div>
      <div>
        <label>Movie URL</label>
        <input
          type="url"
          name="movieUrl"
          defaultValue={initialMovie.movieUrl || ""}
          required
        />
      </div>
      <div>
        <label>Rating</label>
        <input
          type="number"
          name="rating"
          min="0"
          max="10"
          step="0.1"
          defaultValue={initialMovie.rating || ""}
          required
        />
      </div>
      <div>
        <label>Genre</label>
        <select name="genre" defaultValue={initialMovie.genre || ""} required>
          <option value="">Select Genre</option>
          <option value="Action">Action</option>
          <option value="Comedy">Comedy</option>
          <option value="Drama">Drama</option>
        </select>
      </div>
      <div>
        <label>Runtime</label>
        <input
          type="text"
          name="runtime"
          defaultValue={initialMovie.runtime || ""}
          required
        />
      </div>
      <div>
        <label>Overview</label>
        <textarea
          name="overview"
          defaultValue={initialMovie.overview || ""}
        ></textarea>
      </div>
      <div>
        <button type="reset">Reset</button>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}

export default MovieForm;
