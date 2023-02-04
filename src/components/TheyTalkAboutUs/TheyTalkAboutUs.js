import styles from './TheyTalkAboutUs.module.scss';
import { logos } from '../../datas/logos';

export default function TheyTalkAboutUs() {
  return (
    <div className={styles.theyTalkAboutUsContainer}>
      <p className={styles.theyTalkAboutUsContainer_title}>They talk about us</p>
      <div className={styles.theyTalkAboutUsContainer_grid}>
        {logos.map((logo) => (
          <img
            key={crypto.randomUUID()}
            src={logo.src}
            alt={logo.alt}
            className={styles.theyTalkAboutUsContainer_grid_img}
          />
        ))}
      </div>
    </div>
  );
}
