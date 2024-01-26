import React, { useContext } from "react";
import "./Cart.css";
import CartItem from "../CartItem/CartItem";
import AppContext from "../../context/AppContext";


function Cart() {
  
  const{cartItems} = useContext(AppContext)
  
  return (
    <section className="cart">
      <CartItem data={{ thubnail:"", title:"", price:"123"}} />
      resumo do carrinho
    </section>
  );
}

export default Cart;
