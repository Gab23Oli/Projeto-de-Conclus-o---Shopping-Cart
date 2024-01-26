import React, { useContext } from "react";
import { FaOpencart } from "react-icons/fa";
import "./CartButton.css";
import AppContext from "../../context/AppContext";


function CartButton() {

  const { cartItems,isCartVisible, setIsCartVisible } = useContext(AppContext);

  return (
    <button type="buttom" className="cart__button" onClick={() => setIsCartVisible }>
      <FaOpencart />
      { cartItems.length > 0 && <span className="cart-status">{cartItems.length}</span> }
    </button>
  );
}

export default CartButton;
