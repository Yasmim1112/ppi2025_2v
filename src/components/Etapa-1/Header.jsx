
import styles from "./Header.module.css";
import { Link } from "react-router";
import { ShoppingBasket } from "lucide-react";
import { useContext } from "react";
import { CartContext } from "../service/CartContext";

export function Header() {

  const { cart } = useContext(CartContext);
  
  return (
    <header className={styles.header}>
      <Link to="/"><h1>TRJ Megastore</h1></Link>
      <div>
        <Link to="/cart"><ShoppingBasket size={24} /></Link>
        <p>
          Total $: {cart.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2)}
           {cart.length > 0 ? <h3></h3> : <p>{cart.length} items</p>}
        </p>
      </div>
    </header>
  );
}
