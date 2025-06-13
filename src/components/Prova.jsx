import styles from './Prova.module.css';
import { BookHeadphones, Github, Instagram, Phone  } from 'lucide-react';


export function Prova() {
  return (
   <div className={styles.container}>
         <header className={styles.header}      >   
          <BookHeadphones />
        <h1 className={styles.title}>Foco, Força e Fé</h1>
          </header>
         <main className={styles.main}>
                 <div className={styles.grid}>
                   <div className={styles.card}>
                    <img src="https://picsum.photos/200/300?random=1"></img>
                     <h2>My Text 0</h2>
                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                   </div>
                   <div className={styles.card}>
                     <img src="https://picsum.photos/200/300?random=1"></img>
                     <h2>My Text 1</h2>
                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                   </div>
                   <div className={styles.card}>
                     <img src="https://picsum.photos/200/300?random=1"></img>
                     <h2>My Text 2</h2>
                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                   </div>
                   <div className={styles.card}>
                     <img src="https://picsum.photos/200/300?random=1"></img>
                     <h2>Text 3</h2>
                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                   </div>
                   <div className={styles.card}>
                     <img src="https://picsum.photos/200/300?random=1"></img>
                     <h2>Text 4</h2>
                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                   </div>
                 </div>
        </main>
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
       </div>
     );
   }
