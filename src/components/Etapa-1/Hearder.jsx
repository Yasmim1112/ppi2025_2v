import styles from './Hearder.module.css';
import { BookHeadphones, Github, Instagram, Phone  } from 'lucide-react';



export function Hearder() {
  return (
         <header className={styles.header}      >   
          <BookHeadphones />
        <h1 className={styles.title}>Foco, Força, Fé</h1>
          </header> 
     );
   }
