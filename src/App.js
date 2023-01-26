import './default.scss';

import { Outlet } from 'react-router-dom';

function App() {
  const storage = localStorage.getItem('isLoggedIn');

  if (storage) {
    console.log('hello');
    localStorage.setItem('isLoggedIn', true);
  }
  return (
    <div className="App">
      <Outlet />
    </div>
  );
}

export default App;
