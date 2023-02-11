import './default.scss';

import { useNavigate, Outlet } from 'react-router-dom';
import { useEffect } from 'react';
// import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import LogIn from './components/LogIn/LogIn';
import SignUp from './components/SignUp/SignUp';
import { useModale } from './hooks/useModale';

function App() {
  const [modale, handleClick] = useModale();

  // modale ? disableBodyScroll(document) : enableBodyScroll(document);

  // modale ? disableScroll(document) : enableScroll(document);
  // function prevent(e) {
  //   e.preventDefault();
  //   // console.log(e.defaultPrevented);
  // }
  // function disableScroll(el) {
  //   //console.log(el);
  //   el.addEventListener('scroll', prevent);
  // }
  // function enableScroll(el) {
  //   el.removeEventListener('scroll', prevent);
  // }

  const navigate = useNavigate();
  useEffect(() => {
    const storage = localStorage;
    //storage.setItem('isLoggedIn', 'false');
    if (storage) {
      storage.getItem('isLoggedIn');
      if (storage.isLoggedIn === 'true') {
        navigate('/feed');
        console.log('logged in');
      } else {
        navigate('/home');
        console.log('not logged in');
      }
    }
  }, []);
  return (
    <div className='App'>
      <LogIn modale={modale} />
      {modale && (
        <div
          className='backgroundModale'
          onClick={() => handleClick(false)}
        ></div>
      )}
      <SignUp modale={modale} />
      {modale && (
        <div
          className='backgroundModale'
          onClick={() => handleClick(false)}
        ></div>
      )}
      <Header onClick={handleClick} />
      <div className='main'>
        <Outlet />
      </div>
      <Footer onClick={handleClick} />
    </div>
  );
}

export default App;
