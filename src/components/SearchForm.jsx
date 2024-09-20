import React, { useState } from "react";
import "./SearchForm.css"; // Assuming you'll handle custom styling in this file

function SearchForm({ initialQuery, onSearch }) {
  const [query, setQuery] = useState(initialQuery);

  const handleSearch = () => {
    if (onSearch) onSearch(query);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") handleSearch();
  };

  return (
    <div className="search-container">
      <input
        type="text"
        className="search-input"
        placeholder="What do you want to watch?"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <button className="search-button" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
}

export default SearchForm;
