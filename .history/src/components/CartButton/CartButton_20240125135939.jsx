import React from "react";
import { FaOpencart } from "react-icons/fa";
import "./CartButton.css";


function CartButton() {
  return (
    <button type="buttom" className="cart__button">
      <FaOpencart />
      <span className="cart">

      </span>
    </button>
  );
}

export default CartButton;
