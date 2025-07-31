
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
      <div className={styles.cart}>
        <Link to="/cart"><ShoppingBasket size={24} /></Link>
         {cart.length == 0 ? <h5></h5> : <p>{cart.length}</p>}
         
      </div>
    </header>
  );
}
