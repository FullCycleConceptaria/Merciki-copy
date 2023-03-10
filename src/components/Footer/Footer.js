import styles from './Footer.module.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Footer({onClick}) {
  const [link1, setLink1] = useState(false);
  const [link2, setLink2] = useState(false);
  const [link3, setLink3] = useState(false);
  return (
    <div className={styles.footer}>
      <div className={styles.footer_text}>
        <p onClick={() => setLink1(!link1)}>
          Information & Contact
          <i
            className='fa-solid fa-caret-down'
            style={
              link1
                ? { transform: 'rotate(180deg)' }
                : { transform: 'rotate(0)' }
            }
          ></i>
        </p>
        {link1 && (
          <>
            <a href='http://' target='_blank'>
              info@merciki.be
            </a>
            <Link>Contact</Link>
          </>
        )}
        <p onClick={() => setLink2(!link2)}>
          More information
          <i
            className='fa-solid fa-caret-down'
            style={
              link2
                ? { transform: 'rotate(180deg)' }
                : { transform: 'rotate(0)' }
            }
          ></i>
        </p>
        {link2 && (
          <>
            <Link>Merciki in the news</Link>
            <Link>Terms & conditions of use</Link>
          </>
        )}
        <p onClick={() => setLink3(!link3)}>
          My Merciki
          <i
            className='fa-solid fa-caret-down'
            style={
              link3
                ? { transform: 'rotate(180deg)' }
                : { transform: 'rotate(0)' }
            }
          ></i>
        </p>
        {link3 && (
          <>
            <a onClick={() => {
            onClick(true, 'signUp')
            }} 
            className={styles.footer_link }>Sign up</a>
            <a onClick={() => {
            onClick(true, 'logIn')
            }}
            className={styles.footer_link}>Log in</a>
          </>
        )}
      </div>
      <div className={styles.footer_icons}></div>
    </div>
  );
}
