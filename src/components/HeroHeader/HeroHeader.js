import styles from './HeroHeader.module.scss';
import TextAndButtonsContainer from '../TextAndButtonsContainer/TextAndButtonsContainer';

export default function HeroHeader() {
  return (
    <div className={styles.heroHeader}>
      <p className={styles.heroHeader_inspiringSentence}>
        Exchange services and objects without spending a single euro <br />
        <span>
          The mutual aid network that has already convinced thousands of
          Belgians
        </span>
      </p>
      <TextAndButtonsContainer />
    </div>
  );
}
