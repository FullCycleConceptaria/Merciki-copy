import styles from './ItemsServicesGroups.module.scss';

export default function ItemsServicesGroups({src, title, text, onClick}) {
  return (
    <div className={styles.itemsServicesGroups} onClick={onClick}>
      <img src={src} alt='image' className={styles.itemsServicesGroups_img} />
      <div className={styles.itemsServicesGroups_text}>
        <p className={styles.itemsServicesGroups_text_title}>{title}</p>
        <p className={styles.itemsServicesGroups_text_para}>{text}</p>
      </div>
    </div>
  );
}
