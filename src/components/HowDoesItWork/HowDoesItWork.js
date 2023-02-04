import styles from './HowDoesItWork.module.scss';

export default function HowDoesItWork() {
  return (
    <div className={styles.howDoesItWorkContainer}>
      <p className={styles.howDoesItWorkContainer_title}>How does it work ?</p>
      <p className={styles.howDoesItWorkContainer_text}>
        On Merciki, all exchanges are based on points called Mercis. Post ads
        proposing your services and objects, discover what the other members
        propose, and make exchanges without spending a single euro! A system
        that is both economical and ecological. <br />{' '}
        <span>
          You just have to do as if a Merci was worth one euro. It's easy!
        </span>
      </p>
    </div>
  );
}