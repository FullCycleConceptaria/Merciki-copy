import styles from './Footer.module.scss';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footer_text}>
        <p>Informations et contact</p>
        <a href='http://' target='_blank'>
          info@merciki.be
        </a>
        <Link>Formulaire de contact</Link>
        <p>En savoir plus</p>
        <Link>Questions fréquentes</Link>
        <Link>Merciki dans la presse</Link>
        <Link>Conditions d'utilisation</Link>
        <Link>Règlement relatif à la vie privée</Link>
        <p>Mon Merciki</p>
        <Link>S'inscrire</Link>
        <Link>Se connecter</Link>
      </div>
      <div className={styles.footer_icons}></div>
    </div>
  );
}