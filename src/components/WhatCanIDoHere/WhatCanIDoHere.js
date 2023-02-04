import styles from './WhatCanIDoHere.module.scss';
import BoxWithTextAndImage from '../BoxWithTextAndImage/BoxWithTextAndImage';
import toy from '../../assets/img/toy.png';
import trade from '../../assets/img/trade.png';

export default function WhatCanIDoHere() {
  return (
    <div className={styles.reasons}>
      <p className={styles.reasons_title}>
        What can i do here ?
      </p>
      <BoxWithTextAndImage
        theStyle = 'B'
        src={toy}
        alt='toy image'
        title={`Give a second life to what you no longer use`}
        description="Merciki, it's already several tons of waste avoided"
      />
      <BoxWithTextAndImage
        theStyle = 'B'
        src={trade}
        alt='trade image'
        title='Exchange services with your neighbors'
        description='On Merciki, we collect Mercis by doing things we love'
      />
    </div>
  );
}
