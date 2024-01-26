import React, { useState, useEffect } from "react";
import "./Products.css";
import fetchProducts from "../../api/fetchProducts";

function Products() {
  
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    fetchProducts("iphone").then((response) => {
      setProducts(response);
    });
  }, []);
  
  return ( 
    <section className="products container">
      {
        products.map((product) =><p></p>)
      }
    </section>

  );
}

export default Products;
