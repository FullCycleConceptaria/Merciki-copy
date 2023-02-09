import { useLocation } from '../../hooks/useLocation';
import styles from './AdsAround.module.scss';

export default function AdsAround() {
  const position = useLocation()
  return (
    <div className={styles.adsAround}>
      <p>Announcements in {position}</p>
    </div>
  );
}