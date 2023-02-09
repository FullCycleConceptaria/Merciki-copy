import { useLocation } from '../../hooks/useLocation';
import styles from './AdsAround.module.scss';

export default function AdsAround() {
  const position = useLocation();
  return (
    <div className={styles.adsAround}>
      <p className={styles.adsAround_title}>Announcements in {position}</p>
      <div className={styles.adsAround_buttons}>
        <p className={styles.adsAround_buttons_each}>Add</p>
        <p className={styles.adsAround_buttons_each}>Ask</p>
      </div>
    </div>
  );
}
