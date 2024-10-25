import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MovieDetails from "../MovieDetails/MovieDetails";
import axios from "axios";

function MovieDetailsLoader() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch movie details when the component is rendered
  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/movies/${movieId}`
        );
        setMovie(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching movie details:", error);
        setLoading(false);
      }
    };

    fetchMovie();
  }, [movieId]);

  if (loading) return <p>Loading...</p>;

  if (!movie) return <p>Movie not found.</p>;

  return <MovieDetails movie={movie} />;
}

export default MovieDetailsLoader;
