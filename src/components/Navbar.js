import React from "react";
import { Link } from "react-router-dom";

import "../index.css";
const Navbar = ({  cartItem }) => {
  return (
    <div className="nav">
      <Link to="/RexKart_EcommApp/" className="brand-name">
        REX KART
      </Link>
      <div className="pages">
        <Link to="/RexKart_EcommApp/" className="product-page-title">
          Products
        </Link>
        <div className="cart-icon-container">
          <Link to="/RexKart_EcommApp/cart">
            <img
              className="cart-icon"
              src="https://cdn-icons-png.flaticon.com/512/2331/2331970.png"
              alt="cart-icon"
            />
          </Link>

          <span className="cart-count">{cartItem.length}</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
