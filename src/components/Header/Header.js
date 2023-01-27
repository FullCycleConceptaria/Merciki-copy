import styles from './Header.module.scss'

export default function Header(){
    return(
        <div className={styles.header}>
            <p>Merciki</p>
            <i className="fa-solid fa-bars fa-2xl"></i>
        </div>
    )
}