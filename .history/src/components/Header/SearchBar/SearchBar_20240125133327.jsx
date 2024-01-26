import React, {useState} from "react";
import { FaSearchDollar } from "react-icons/fa";

import "./SearchBar.css";

function SearchBar() {

  const [searchValue, setSearchValue] = useState("");

  return (
    <form className="search-bar">
      <input type="search" placeholder="Buscar Produtos..." className="search__input" required/>
      searchValue
      <button type="submit" className="search__button">
        <FaSearchDollar />
      </button>
    </form>
  );
}

export default SearchBar;
