import { useEffect } from 'react';
import styles from './Modale.module.scss';
import { useModaleFunctions } from '../../hooks/useModaleFunctions';

export default function Modale({ modale, modaleVariant, onClick }) {
  const [prevent, handleSubmit, handleInput, inputs] = useModaleFunctions()
  
  useEffect(() => {
    if (modale) {
      window.addEventListener('wheel', prevent, { passive: false });
      window.addEventListener('scroll', prevent, { passive: false });
      window.addEventListener('touchmove', prevent, { passive: false });
    } else {
      window.removeEventListener('wheel', prevent);
      window.removeEventListener('scroll', prevent);
      window.removeEventListener('touchmove', prevent);
    }
    return () => {
      window.removeEventListener('wheel', prevent);
      window.removeEventListener('scroll', prevent);
      window.removeEventListener('touchmove', prevent);
    };
  }, [modale]);

  return (
    <div
      className={styles.modale}
      style={
        modale
          ? { transform: 'translateY(-50%)' }
          : { transform: 'translateY(200%)' }
      }
    >
      {modaleVariant === 'logIn' && (
        <>
          <form>
            <input
              type='text'
              placeholder='Email'
              name='email'
              value={inputs.email}
              onInput={handleInput}
            />
            <input
              type='password'
              placeholder='Password'
              name='password'
              value={inputs.password}
              onInput={handleInput}
            />
            <button onClick={(e) => handleSubmit(e, onClick)}>Log in</button>
          </form>
          <div className={styles.modalePlus}>
            <p>
              <span>Reset password</span>
            </p>
            <p>
              No account?
              <span onClick={() => onClick(true, 'signUp')}>Create one</span>
            </p>
          </div>
        </>
      )}
      {modaleVariant === 'signUp' && (
        <>
          <form className={styles.formSignUp}>
            <div>
              <input
                className={styles.formSignUpName}
                type='text'
                placeholder='First Name'
              />
              <input
                className={styles.formSignUpName}
                type='text'
                placeholder='Last Name'
              />
            </div>
            <input type='text' placeholder='Username' />
            <input
              type='text'
              placeholder='Email'
              name='email'
              value={inputs.email}
              onInput={handleInput}
            />
            <input
              type='password'
              placeholder='Password'
              name='password'
              value={inputs.password}
              onInput={handleInput}
            />
            <button>Sign up</button>
          </form>
          <div className={styles.modalePlusSignUp}>
            <p>
              Already have an account?{' '}
              <span onClick={() => onClick(true, 'logIn')}>Log in</span>
            </p>
          </div>
        </>
      )}
    </div>
  );
}
