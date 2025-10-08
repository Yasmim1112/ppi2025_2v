import styles from "./TelaDel.module.css";
import { Link } from "react-router";


export function TelaDel() { 
    function handleLogin() {
      <Link to="/login"><CircleUserRound /></Link>
    }
    return (
        <div className={styles.container}>
        <h1>Bem-vindo(a) a TRJ Megastore!</h1>
        <form className={styles.form}>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
            <label htmlFor="password">Senha:</label>
            <input type="password" id="password" name="password" required />
            <button type= "submit" onClick={handleLogin}>Entrar</button>
            <Link to="/tela-der"><button type="button">Registrar</button></Link>
        </form>
        </div>
    );
    }
