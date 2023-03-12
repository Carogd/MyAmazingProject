import React from "react";
import cartIcon from "./shopping-cart.svg";
import { Link } from "react-router-dom";
import "./FloatingCart.css";

function FlotingCart() {
  return (
    <Link to='shoppingCart'>
      <div className='floating-cart'>
        <p>Votre panier</p>
        <div className='img-notif-container'>
          <img src={cartIcon} alt='icon cardi' />
          <span className='notif'>0</span>
        </div>
      </div>
    </Link>
  );
}

export default FlotingCart;
