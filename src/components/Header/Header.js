import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';

export default function Header() {
  const [menu, setMenu] = useState(false);
  return (
    <div className={styles.header}>
      <div className={styles.header_main}>
        <Link
          to='/home'
          className={styles.header_main_title}
          onClick={() => setMenu(false)}
        >
          Merciki
        </Link>
        <i
          className={
            menu ? 'fa-solid fa-xmark fa-2xl' : 'fa-solid fa-bars fa-2xl'
          }
          onClick={() => setMenu(!menu)}
        ></i>
      </div>
      <div
        className={styles.header_menu}
        style={menu ? { height: '13rem' } : { height: '0%' }}
      >
        <div className={styles.header_menu_top}>
          <Link
            className={styles.black}
            to='/items'
            onClick={() => setMenu(false)}
          >
            Items
          </Link>
          <Link
            className={styles.black}
            to='/services'
            onClick={() => setMenu(false)}
          >
            Services
          </Link>
          <Link
            className={styles.black}
            to='/groups'
            onClick={() => setMenu(false)}
          >
            Groups
          </Link>
        </div>
        <div className={styles.header_menu_bot}>
          <Link className={styles.header_menu_bot_signUp}>Sign up</Link>
          <Link className={styles.header_menu_bot_signIn}>Log in</Link>
        </div>
      </div>
    </div>
  );
}
