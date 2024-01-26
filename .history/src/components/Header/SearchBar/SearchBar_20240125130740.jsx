import React from "react";
import { FaSearchDollar } from "react-icons/fa";

import "./SearchBar.css";

function SearchBar() {
  return (
    <form className="">
      <input type="search" placeholder="Buscar Produtos..." className="search__input" required/>
      <button type="submit" className="search__button">
        <FaSearchDollar />
      </button>
    </form>
  );
}

export default SearchBar;
