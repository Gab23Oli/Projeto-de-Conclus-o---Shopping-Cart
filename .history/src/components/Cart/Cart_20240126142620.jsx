import React from "react";
import "./Cart.css";
import CartItem from "../CartItem/CartItem";


function Cart() {
  return (
    <section className="cart">
      <CartItem data={{ thubnail:"", title:"", price:""}} />
      resumo do carrinho
    </section>
  );
}

export default Cart;
