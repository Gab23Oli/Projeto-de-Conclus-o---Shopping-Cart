import React from "react";

function ProductCard() {
  return (
    <section className="product-card">
      
      <img src="" alt="product" className="card__image" />
      <div className="Card__infos">
        <h2 className="card__price">R$ 200.00</h2>
        <h2 className="card__title">produto teste</h2>
      </div>
      <button type="button" className="button__add"></button>

    </section>
  );
}

export default ProductCard;
