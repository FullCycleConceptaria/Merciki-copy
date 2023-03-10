import styles from './JoinCommunity.module.scss';

export default function JoinCommunity({onClick}) {
  return (
    <div className={styles.joinCommunity}>
      <p className={styles.joinCommunity_title}>Join Merciki's community</p>
      <p className={styles.joinCommunity_text}>Receive your first 20 Mercis</p>
      <p className={styles.joinCommunity_description}>
      You will be able to exchange them for objects or services offered by other
      Merciki members</p>
      <a onClick={() => {onClick(true, 'signUp')}}  className={styles.joinCommunity_button}>Sign up</a>
    </div>
  );
}