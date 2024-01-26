import React, { useContext } from "react";
import "./Cart.css";
import CartItem from "../CartItem/CartItem";
import AppContext from "../../context/AppContext";


function Cart() {
  
  const{cartItems} = useContext(AppContext)
  
  return (
    <section className="cart">
      
      { cartItems.map((cartItem) => <CartItem key={cartItem.id} data />) }
    </section>
  );
}

export default Cart;
