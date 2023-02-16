import { useEffect, useState } from "react";
import styles from "./Modale.module.scss";
import '../../datas/userDatas';
import { userDatas } from "../../datas/userDatas";
import { useNavigate } from "react-router-dom";

export default function Modale({ modale, onClick }) {
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
      className={styles.login}
      style={
        modale
          ? { transform: "translateY(-50%)" }
          : { transform: "translateY(120%)" }
      }
    >
      <form>
        <input type="text" placeholder="Email" value={loginEmail} onInput={e => setLoginEmail(e.target.value)} />
        <input type="text" placeholder="Password" value={loginPassword} onInput={e => setLoginPassword(e.target.value)}/>
        <button onClick={e => {
          e.preventDefault();
          loginCheck();
          console.log(loginEmail);
          }}>Log in</button>
      </form>
      <div className={styles.loginPlus}>
        <p><span>Reset password</span></p>
        <p>No account? <span>Create one</span></p>
      </div>
    </div>
  );
}