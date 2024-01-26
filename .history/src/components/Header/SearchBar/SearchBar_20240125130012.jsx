import React from "react";
import { FaSearchDollar } from "react-icons/fa";

function SearchBar() {
  return (
    <form>
      <input type="search" placeholder="Buscar Produtos..." className="search__input" required/>
      <button type="submit" className="search__button">
        icone
      </button>
    </form>
  );
}

export default SearchBar;
