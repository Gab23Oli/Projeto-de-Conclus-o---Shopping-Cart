import React from "react";
import { MdAttachMoney } from "react-icons/md";

import "./ProductCard.css";

function ProductCard({ data }) {
  return (
    <section className="product-card">
      
      <img src="http://http2.mlstatic.com/D_790522-MLA47782243619_102021-W.jpg" alt="product" className="card__image" />
      <div className="card__infos">
        <h2 className="card__price">R$ 200.00</h2>
        <h2 className="card__title">produto teste</h2>
      </div>
      <button type="button" className="button__add-cart">
        <MdAttachMoney />
      </button>

    </section>
  );
}

export default ProductCard;

ProductCard.propTypes = {
  data: propTypes.shaps({})
}.isRequired;
