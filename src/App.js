import './default.scss';

import { useNavigate, Outlet } from 'react-router-dom';
import { useEffect } from 'react';

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer';

function App() {
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
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
