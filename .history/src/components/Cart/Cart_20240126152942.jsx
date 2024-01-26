import React, { useContext } from "react";
import "./Cart.css";
import CartItem from "../CartItem/CartItem";
import AppContext from "../../context/AppContext";


function Cart() {
  const{ cartItems } = useContext(AppContext);
  
  const totalPrice = cartItems.reduce((acc, item) => item.price + acc, 0);


  return (
    <section className="cart">
      <div className="cart-items">

        { cartItems.map((cartItem) => <CartItem key={cartItem.id} data={cartItem} />) }
      </div>
      <div className="cart-resume">(formatCurrency(totalPrice,))</div>
    </section>
  );
}

export default Cart;
