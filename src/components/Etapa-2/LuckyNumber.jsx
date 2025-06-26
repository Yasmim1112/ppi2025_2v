import { useState } from "react";
import styles from "./LuckyNumber.module.css";

export function LuckyNumber() {
  const [num, setNum] = useState(0);         
  const [hist, setHist] = useState([]);      
  const [msg, setMsg] = useState('');        

  function handleClick() {
    const n = Math.floor(Math.random() * 40) + 1;

    if (hist.includes(n)) {
      setMsg(`O número ${n} já foi sorteado!`);
    } else {
      setNum(n);
      setHist([...hist, n]);
      setMsg('');
    }
  }

  return (
    <div className={styles.container}>
      {num === 0 ? (
        <h1>Lucky Number 🎲</h1>
      ) : (
        <h1>Lucky Number = {num}</h1>
      )}

      <button className={styles.button} onClick={handleClick}>
        I'm Feeling Lucky Today!
      </button>

      {msg && <p style={{ color: 'red', fontSize: '1.5rem' }}>{msg}</p>}

      {hist.length > 0 && (
        <div style={{ marginTop: '2rem', fontSize: '1.5rem' }}>
          <strong>Números sorteados:</strong>
          <p>{hist.join(', ')}</p>
        </div>
      )}
    </div>
  );
}