import { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.scss'

export default function Header(){
    const [menu, setMenu] = useState(false)
    return(
        <div className={styles.header}>
            <div className={styles.header_main}>
                <p>Merciki</p>
                <i className="fa-solid fa-bars fa-2xl" onClick={() => setMenu(!menu)}></i>
            </div>
            <div className={styles.header_menu} style={menu ? {height: '300%'} : {height: '0%'}}>
                <Link style={menu ? {opacity: '1'} : {opacity: '0'}}>Objets</Link>
                <Link style={menu ? {opacity: '1'} : {opacity: '0'}}>Services</Link>
                <Link style={menu ? {opacity: '1'} : {opacity: '0'}}>Groupes</Link>
                <Link className={styles.header_menu_signup} style={menu ? {opacity: '1'} : {opacity: '0'}}>S'inscrire</Link>
                <Link className={styles.header_menu_signin} style={menu ? {opacity: '1'} : {opacity: '0'}}>Se connecter</Link>
            </div>
        </div>
    )
}