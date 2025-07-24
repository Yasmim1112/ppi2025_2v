import { Link } from "react-router";
import styles from "./Header.module.css";
import { ShoppingBasket } from "lucide-react";
import { useContext } from "react"; 
import { CartConctext } from "../service/CartContext";


export function Header({ cart }) {
  const { addToCart, rmToCart } = useContext(CartConctext);
  return (
    <header className={styles.header}>
      <Link to="/"><h1>TRJ Megastore</h1></Link>
      <div>
        <Link to="/cart"><ShoppingBasket size={24} /></Link>
        <p>
          Total $: {cart.reduce((total, product) => total + product.price, 0).toFixed(2)}
        </p>
      </div>
    </header>
  );
}
