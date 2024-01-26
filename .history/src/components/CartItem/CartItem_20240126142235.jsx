import React from "react";
import propType
import "./CartItem.css";
import { CiCircleMinus } from "react-icons/ci";

function CartItem({ data }) {

  const {thumbnail, title, price} = data

  return (
    <section className="cart-item">
      <img src="" alt="imagem do produto" className="cart-item-image"/>
      <div className="cart-item-content">
        <h3 className="cart-item-title">{title}</h3>
        <h3 className="cart-item-price">{formatCurrency(price)}</h3>
      
        <button type="buttom" className="button__remove-item">
          <CiCircleMinus />
        </button>
      </div>

    </section>
  );
}

export default CartItem;
