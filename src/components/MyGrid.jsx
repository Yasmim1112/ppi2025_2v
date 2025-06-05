import styles from './MyGrid.module.css';
import { MyText } from './MyText';

export function MyGrid(){
return (

    <main className={styles.main}>
        <div className={styles.grid}>
        <div className={styles.card}>
            <h2>card1</h2>
            <p>this is card</p>
        </div>
    <div className={styles.card}>
            <h2>card1</h2>
            <p>this is card</p>
        </div>

        <div className={styles.card}>
            <h2>card2</h2>
            <p>this is card</p>
        </div>
        <div className={styles.card}>
            <h2>card3</h2>
            <p>this is card</p>
        </div>
        <div className={styles.card}>
            <h2>card4</h2>
            <p>this is card</p>
        </div>
        <div className={styles.card}>
            <h2>card5</h2>
            <p>this is card</p>
        </div>
        </div>

        </main>
);
}
