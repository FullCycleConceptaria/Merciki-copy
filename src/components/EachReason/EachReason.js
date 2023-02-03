import styles from './EachReason.module.scss';

export default function EachReason({ src, alt, title, description }) {
  return (
    <div className={styles.reasonContainer}>
      <div className={styles.reasonContainer_header}>
        <img src={src} alt={alt} className={styles.reasonContainer_header_img} />
        <p className={styles.reasonContainer_header_title}>{title}</p>
      </div>
      <p className={styles.reasonContainer_description}>{description}</p>
    </div>
  );
}