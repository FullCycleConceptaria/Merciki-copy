import styles from './Reasons.module.scss';
import EachReason from '../EachReason/EachReason';
import profits from '../../assets/img/profits.png';
import earth from '../../assets/img/planet-earth.png';
import house from '../../assets/img/house.png';

export default function Reasons() {
  return (
    <div className={styles.reasons}>
      <p className={styles.reasons_title}>
        Three good reasons to join <span>Merciki</span> !
      </p>
      <EachReason
        src={profits}
        alt='money image'
        title={`Here, money doesn't exist`}
        description='On Merciki, All exchanges are based on points called Mercis. No need to touch your wallet !'
      />
      <EachReason
        src={earth}
        alt='earth image'
        title='Protect the environment'
        description='Thousands of objects have found a second life on Merciki. That means tons of waste and CO2 emissions avoided !'
      />
      <EachReason
        src={house}
        alt='house image'
        title='Helping each other out'
        description='Your neighbors are talented, and could very well give you the boost you need !'
      />
    </div>
  );
}
