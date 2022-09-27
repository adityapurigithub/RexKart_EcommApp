import React from "react";
import { Link } from "react-router-dom";

function Cart({ cartItem, handleIncQuantity, handleDecQuantity,handleDeleteProduct
 }) {
  console.log(cartItem);
  let total = 0;
  for (var item of cartItem) {
    total += item.price * item.quantity;
  }
  console.log(total);
  if (cartItem.length === 0) {
    return (
      <div style={{ margin: "100px", textAlign: "center" }}>
        <img
          src="https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90"
          height="200px"
        />
        <h2>No Item in Cart!!!</h2>
        <h4>Add Items to it Now</h4>
        <Link to="/RexKart_EcommApp/">
          <button id="shop-now">Shop Now</button>
        </Link>
      </div>
    );
  }
  return (
    <div className="cart">
      <div className="cart-container">
        <h2>Your Cart Items:</h2>
        {cartItem.map((item) => {
          return (
            <div className="thumbnail">
              <div className="left-box">
                <img src={item.imageURL} />
              </div>
              <div className="right-box">
                <span>
                  <b>
                    <i>Item: {item.name}</i>
                  </b>
                </span>
                <span>Price: ₹ {item.price}</span>
                <span>Colour: {item.color}</span>
                <span>Type: {item.type}</span>

                <div className="quantity-box">
                  <div>Quantity: {item.quantity}</div>
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/992/992651.png"
                    height="20"
                    onClick={() => handleIncQuantity(item.id)}
                  />
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/992/992683.png"
                    height="20"
                    onClick={() => handleDecQuantity(item.id)}
                  />
                </div>
              </div>
              <div className="delete-item">
                <img src="https://cdn-icons-png.flaticon.com/512/6861/6861362.png" id={item.id} height={25} onClick={handleDeleteProduct}/>
              </div>

              </div>
          );
        })}
      </div>
      <div className="check-out-total">
        <h2>Your Subtotal : ₹ {total}/- </h2>
        <h3>(Total Items : {cartItem.length})</h3>
      </div>
    </div>
  );
}

export default Cart;
