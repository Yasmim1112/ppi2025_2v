import styles from "./Cart.module.css";
import { useState } from "react";
import { Product } from "./Product";
export function Cart({ cart, addToCart, rmToCart }) {

  const productMap = {};
  cart.forEach((product) => {
    if (productMap[product.id]) {
      productMap[product.id].qty += 1;
    } else {
      productMap[product.id] = { ...product, qty: 1 };
    }
  });
   const uniqueProducts = Object.values(productMap);


  return (
    <div className={styles.cart}>
      <h2>Shopping Cart</h2>
      {uniqueProducts.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {uniqueProducts.map((product, index) => (
            <li key={index}>
              <div className={styles.cartItem}>
                <img src={product.thumbnail} alt={product.title} />
                <div className={styles.itemDetails}>
                  <h3>{product.title}</h3>
                  <p>${product.price.toFixed(2)*product.qty}</p>
                  
                    <button className={styles.buttonq}
                      onClick={() => {
                        if (product.qty > 1) {
                          rmToCart(product);
                        }
                      }}
                      >-</button>
                    <p>{product.qty}</p>
                    <button className={styles.buttonq}
                      onClick={() => {
                        addToCart(product);
                      }}
                      >+</button>
                      <button onClick ={() => {
                  for (let i = 0; i < product.qty; i++) {
                    rmToCart(product);
                  }
                }}> Remove </button>

                    </div>
                </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}



