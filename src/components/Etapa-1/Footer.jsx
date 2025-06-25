import styles from './Footer.module.css';
import { BookHeadphones, Github, Instagram, Phone  } from 'lucide-react';


export function Footer() {
  return (
         <footer className={styles.footer} >
          <div className={styles.footerText}>
          <h1>IFRN-Campus Macau</h1>
          <h1>Curso Técnino em Informática</h1>
           <h1>Programação para Internet 2025</h1>
            </div>
            <h2>Yasmim Fernandes dos Santos</h2>
            <div className={styles.icons}>
            <a href='https://github.com/Yasmim1112' target='_blank'>
              <Github/>
            </a>
            <a href='https://instagram.com/yasmimfdossantos/' target='_blank'>
              <Instagram/>
            </a>
            <a href='tel:+558497034815' target='_blank'>
              <Phone/>
            </a>
          </div>
         </footer>
     );
   }
