import { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.scss'

export default function Header(){
    const [menu, setMenu] = useState(false)
    return (
      <div className={styles.header}>
        <div
          className={styles.header_main}
          style={
            menu
              ? { borderBottom: '2px #ebebeb solid' }
              : { borderBottom: '2px #ffffff solid' }
          }
        >
          <p>Merciki</p>
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
            <Link className={styles.black}>Items</Link>
            <Link className={styles.black}>Services</Link>
            <Link className={styles.black}>Groups</Link>
          </div>
          <div className={styles.header_menu_bot}>
            <Link className={styles.header_menu_bot_signUp}>Sign up</Link>
            <Link className={styles.header_menu_bot_signIn}>Log in</Link>
          </div>
        </div>
      </div>
    );
}