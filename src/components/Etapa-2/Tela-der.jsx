import styles from "./Tela-der.module.css";
import { Link } from "react-router";


export function TelaDer() { 
    function handleLogin() {
      <Link to="/login"><CircleUserRound /></Link>
    }
    return (
        <div className={styles.container}>
            <h1>Tela de cadastro</h1> 
        <form className={styles.form}>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
            <label htmlFor="password">Senha:</label>
            <input type="password" id="password" name="password" required />
            <button type="button">Registrar</button>
        </form>
        </div>
    );
    }
