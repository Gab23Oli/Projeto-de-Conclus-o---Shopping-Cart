import React, { useState, useContext } from "react";
import { FaSearchDollar } from "react-icons/fa";
import "./SearchBar.css";
import fetchProducts from "../../api/fetchProducts";
import AppContext from "../../context/AppContext";

function SearchBar() {

  const [searchValue, setSearchValue] = useState("");

  const {setProducts} = useContext(AppContext);


  const handleSearch = async(event) => {
    event.preventDefault();
    
    const products = await fetchProducts(searchValue);
    console.log(products);
    setSearchValue("");
  };

  return (
    <form className="search-bar" onSubmit={handleSearch}>
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
