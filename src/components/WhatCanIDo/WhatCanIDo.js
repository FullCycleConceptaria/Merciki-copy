import styles from './WhatCanIDo.module.scss';

export default function(){
  return(
    <div className={styles.whatcanido}>
      <div className={styles.whatcanido_txt}>
        <div className={styles.whatcanido_txt}></div>
        <div className={styles.whatcanido_txt}></div>
      </div>
      <div className={styles.whatcanido_image}></div>
    </div>
  )
}