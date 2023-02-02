import styles from './TextAndButtonsContainer.module.scss';
import { Link } from 'react-router-dom';

export default function TextAndButtonsContainer() {
  return (
    <div className={styles.container}>
      <p className={styles.container_title}>Discover the announcements</p>
      <p className={styles.container_description}>
        Everything can be exchanged for free on Merciki!
      </p>
      <div className={styles.container_buttons}>
        <Link className={styles.container_buttons_button}>Items</Link>
        <Link className={styles.container_buttons_button}>Services</Link>
      </div>
    </div>
  );
}