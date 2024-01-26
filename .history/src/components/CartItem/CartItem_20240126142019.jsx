import React from "react";
import "./CartItem.css";
import { CiCircleMinus } from "react-icons/ci";

function CartItem({ data }) {

  const

  return (
    <section className="cart-item">
      <img src="" alt="imagem do produto" className="cart-item-image"/>
      <div className="cart-item-content">
        <h3 className="cart-item-title">titulo do produto</h3>
        <h3 className="cart-item-price">R$ 200,00</h3>
      
        <button type="buttom" className="button__remove-item">
          <CiCircleMinus />
        </button>
      </div>

    </section>
  );
}

export default CartItem;
