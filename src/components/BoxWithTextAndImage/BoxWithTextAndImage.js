import styles from './BoxWithTextAndImage.module.scss';

export default function BoxWithTextAndImage({ src, alt, title, description, theStyle = 'A' }) {
  return (
    <div className={styles.reasonContainer} style={theStyle === 'B' ? {background : '#262626'} : {}}> 
      <div className={styles.reasonContainer_header} style={theStyle === 'A' ? {flexDirection : 'row'} : {flexDirection : 'row-reverse'}}>
        <img src={src} alt={alt} className={styles.reasonContainer_header_img} style={theStyle === 'A' ? {marginRight: '1rem'} : {marginLeft: '1rem', width: '8.2rem', height: '8.2rem', background: 'white'}} />
        <p className={styles.reasonContainer_header_title} style={theStyle === 'A' ? {fontSize : '3rem'} : {fontSize : '2.5rem', color : 'white'}}>{title}</p>
      </div>
      <p className={styles.reasonContainer_description} style={theStyle === 'A' ? {} : {color : 'white'}}>{description}</p>
    </div>
  );
}