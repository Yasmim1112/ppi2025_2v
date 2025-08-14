import styles from "./Tela-del.module.css";
import { Link } from "react-router";


export function TelaDel() { 
    function handleLogin() {
      <Link to="/login"><CircleUserRound /></Link>
    }
    return (
        <div className={styles.container}>
        <h1>Bem-vindo(a) a TRJ Megastore</h1>
        <form>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
            <label htmlFor="password">Senha:</label>
            <input type="password" id="password" name="password" required />
            <button type= "submit" onClick={handleLogin}>Entrar</button>
            <button type="button">Registrar</button>
        </form>
        </div>
    );
    }
