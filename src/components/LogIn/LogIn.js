import { useEffect } from 'react';
import styles from './LogIn.module.scss';

export default function LogIn({ modale }) {
  useEffect(() => {
    if (modale) {
      window.addEventListener('wheel', prevent,{passive:false});
      window.addEventListener('scroll', prevent,{passive:false});
    } else {
      window.removeEventListener('wheel', prevent);
      window.removeEventListener('scroll', prevent);
    }
    return () => {
      window.removeEventListener('wheel', prevent);
      window.removeEventListener('scroll', prevent);
    };
  }, [modale]);

  function prevent(e) {
    console.log('prevent');
    e.preventDefault();
  }

  return (
    <div
      className={styles.login}
      style={
        modale
          ? { transform: 'translateY(-50%)' }
          : { transform: 'translateY(100%)' }
      }></div>
  );
}
