import styles from './AdsAround.module.scss';

export default function AdsAround() {
  // let position;
  // if (navigator.geolocation) {
  //   position = navigator.geolocation.getCurrentPosition();
  // } else {
  //   position = 'error lol';
  // }
  return (
    <div className={styles.adsAround}>
      <p>Announcements around</p>
    </div>
  );
}