import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MovieListPage from "./pages/MovieListPage";
import SearchForm from "./components/SearchForm/SearchForm";
import MovieDetailsLoader from "./components/MovieDetailsLoader/MovieDetailsLoader";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MovieListPage />}>
          <Route index element={<SearchForm />} /> {/* Default route for SearchForm */}
          <Route path=":movieId" element={<MovieDetailsLoader />} /> {/* Dynamic route for movie details */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
