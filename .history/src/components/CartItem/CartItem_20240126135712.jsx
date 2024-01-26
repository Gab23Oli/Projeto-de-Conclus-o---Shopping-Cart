import React from "react";
import "./CartItem.css";


function CartItem() {
  return (
    <section className="cart-item">
      <img
        src=""
        alt="imagem do produto"
        className="cart-item-image"
      />

      <div className="cart-item-content">
        <h3 className="">titulo do produto</h3>
      </div>

    </section>
  );
}

export default CartItem;
