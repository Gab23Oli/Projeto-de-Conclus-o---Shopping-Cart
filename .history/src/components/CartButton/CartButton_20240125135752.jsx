import React from "react";
import { FaOpencart } from "react-icons/fa";
import "./CartButton.css";


function CartButton() {
  return (
    <button type="buttom" className="cart__button">
      <FaOpencart />
    </button>
  );
}

export default CartButton;
