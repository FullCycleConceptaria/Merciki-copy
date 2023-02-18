import { useEffect } from 'react';
import styles from './Modale.module.scss';
import { useModaleFunctions } from '../../hooks/useModaleFunctions';

export default function Modale({ modale, modaleVariant, onClick }) {
  const [
    prevent,
    handleSubmit,
    handleInput,
    inputs,
    setInputs,
    error,
    setError,
  ] = useModaleFunctions();

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

  useEffect(() => {
    modale === false &&
      setInputs({
        name: '',
        surname: '',
        username: '',
        email: '',
        password: '',
      });
    setError({
      email: false,
      password: false,
    });
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
          <form onSubmit={(e) => handleSubmit(e, onClick)}>
            {error.email && <div className={styles.error}>Email not valid</div>}
            <input
              type='text'
              placeholder='Email'
              name='email'
              autoComplete='on'
              value={modale ? inputs.email : ''}
              onInput={handleInput}
              style={
                error.email
                  ? { border: 'solid #a34a21 .25rem' }
                  : { border: 'solid #262626 .25rem' }
              }
            />
            {error.password && <div className={styles.error}>Password not valid</div>}
            <input
              type='password'
              placeholder='Password'
              name='password'
              autoComplete='on'
              value={modale ? inputs.password : ''}
              onInput={handleInput}
              style={
                error.password
                  ? { border: 'solid #a34a21 .25rem' }
                  : { border: 'solid #262626 .25rem' }
              }
            />
            <button>Log in</button>
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
                placeholder='Name'
                name='name'
                autoComplete='on'
                value={modale ? inputs.name : ''}
                onInput={handleInput}
              />
              <input
                className={styles.formSignUpName}
                type='text'
                placeholder='Surname'
                name='surname'
                autoComplete='on'
                value={modale ? inputs.surname : ''}
                onInput={handleInput}
              />
            </div>
            <input type='text' placeholder='Username' />
            <input
              type='text'
              placeholder='Email'
              name='email'
              autoComplete='on'
              value={modale ? inputs.email : ''}
              onInput={handleInput}
            />
            <input
              type='password'
              placeholder='Password'
              name='password'
              autoComplete='on'
              value={modale ? inputs.password : ''}
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
