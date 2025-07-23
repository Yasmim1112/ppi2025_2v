import styles from "./Cart.module.css";
import { useState } from "react";

export function Cart({ cart }) {
  const [qty, setQty] = useState(1);

  return (
    <div className={styles.cart}>
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((product, index) => (
            <li key={index}>
              <div className={styles.cartItem}>
                <img src={product.thumbnail} alt={product.title} />
                <div className={styles.itemDetails}>
                  <h3>{product.title}</h3>
                  <p>${product.price.toFixed(2)}</p>
                  <div className={styles.quantity}>
                    <button className={styles.buttonq}
                      onClick={() => {
                        if (qty > 1) {
                          setQty(qty - 1);
                        }
                      }}
                      >-</button>
                    <p>{qty}</p>
                    <button className={styles.buttonq}
                      onClick={() => {
                        setQty(qty + 1);
                      }}
                      >+</button>
                    </div>
                </div>
                </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}