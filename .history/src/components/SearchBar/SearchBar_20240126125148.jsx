import React, { useState } from "react";
import { FaSearchDollar } from "react-icons/fa";

import "./SearchBar.css";

function SearchBar() {

  const [searchValue, setSearchValue] = useState("");

  const handleSearch = () => {
    
  }

  return (
    <form className="search-bar">
      <input 
        type="search"
        value={searchValue} 
        placeholder="Buscar Produtos..." 
        className="search__input" 
        required 
        onChange={({ target }) => setSearchValue(target.value) }
      />
      <button type="submit" className="search__button">
        <FaSearchDollar />
      </button>
    </form>
  );
}

export default SearchBar;
