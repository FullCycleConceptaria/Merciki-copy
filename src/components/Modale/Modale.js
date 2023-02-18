import { useEffect, useState } from "react";
import styles from "./Modale.module.scss";
import '../../datas/userDatas';
import { userDatas } from "../../datas/userDatas";
import { useNavigate } from "react-router-dom";

export default function Modale({ modale, modaleVariant, onClick }) {
  useEffect(() => {
    if (modale) {
      window.addEventListener("wheel", prevent, { passive: false });
      window.addEventListener("scroll", prevent, { passive: false });
      window.addEventListener("touchmove", prevent, { passive: false });
    } else {
      window.removeEventListener("wheel", prevent);
      window.removeEventListener("scroll", prevent);
      window.removeEventListener("touchmove", prevent);
    }
    return () => {
      window.removeEventListener("wheel", prevent);
      window.removeEventListener("scroll", prevent);
      window.removeEventListener("touchmove", prevent);
    };
  }, [modale]);

  function prevent(e) {
    console.log("prevent");
    e.preventDefault();
  }

  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [inputs, setInputs] = useState({name : '', surname : '', username : '', email : '', password : ''});
  const navigate = useNavigate();
  function loginCheck(){
    if (loginEmail === userDatas[0].email && loginPassword === userDatas[0].password) {
      navigate('/feed');
      onClick(false);
      //storage.setItem('isLoggedIn', 'true');
    }
  }

  return (
    <div
      className={styles.modale}
      style={
        modale
          ? { transform: "translateY(-50%)" }
          : { transform: "translateY(120%)" }
      }
    >
      {modaleVariant === 'logIn' && (
          <>
            <form>
              <input type="text" placeholder="Email" value={loginEmail} onInput={e => setLoginEmail(e.target.value)} />
              <input type="password" placeholder="Password" value={loginPassword} onInput={e => setLoginPassword(e.target.value)}/>
              <button onClick={e => {
                e.preventDefault();
                loginCheck();
                console.log(loginEmail);
                }}>Log in</button>
            </form>
            <div className={styles.modalePlus}>
              <p><span>Reset password</span></p>
              <p>No account? <span onClick={() => onClick(true, 'signUp')}>Create one</span></p>
            </div>
          </>
        )}
      {modaleVariant === 'signUp' && (
          <>
            <form className={styles.formSignUp}>
              <div>
                <input className={styles.formSignUpName} type="text" placeholder="First Name"/>
                <input className={styles.formSignUpName} type="text" placeholder="Last Name"/>
              </div>
              <input type="text" placeholder="Username"/>
              <input type="text" placeholder="Email" value={loginEmail} onInput={e => setLoginEmail(e.target.value)} />
              <input type="password" placeholder="Password" value={loginPassword} onInput={e => setLoginPassword(e.target.value)}/>
              <button onClick={e => {
                e.preventDefault();
                loginCheck();
                console.log(loginEmail);
                }}>Sign up</button>
            </form>
            <div className={styles.modalePlusSignUp}>
              <p>Already have an account? <span onClick={() => onClick(true, 'logIn')}>Log in</span></p>
            </div>
          </>
        )}
    </div>
  );
}