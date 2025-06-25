import styles from './LuckyNumber.module.css';
import {useState} from 'react';

export function LuckyNumber(){
const [LuckyNumber, setLuckyNumber] = useState(0);


function handleClick() {
   setLuckyNumber(Math.floor(Math.random() * 40) + 1);

}
    return (
        <div className={styles.container}>
            {LuckyNumber === 0 ? (
             <h1>Lucky Number 🎲</h1>
    ) : (
              <h1>Lucky Number = {LuckyNumber}</h1>
            )}
            
            <button className={styles.button} onClick={handleClick} >I'felling lucky today!
            </button>
            </div>
    );
}


