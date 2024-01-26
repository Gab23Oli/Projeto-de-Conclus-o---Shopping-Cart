import React from "react";

import "./ProductCard.css";

function ProductCard() {
  return (
    <section className="product-card">
      
      <img src="http://http2.mlstatic.com/D_790522-MLA47782243619_102021-W.jpg" alt="product" className="card__image" />
      <div className="card__infos">
        <h2 className="card__price">R$ 200.00</h2>
        <h2 className="card__title">produto teste</h2>
      </div>
      <button type="button" className="button__add-cart">+</button>

    </section>
  );
}

export default ProductCard;
