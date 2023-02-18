import { userDatas } from '../datas/userDatas';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function useModaleFunctions() {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    name: '',
    surname: '',
    username: '',
    email: '',
    password: '',
  });

  function prevent(e) {
    console.log('prevent');
    e.preventDefault();
  }

  function handleSubmit(e, onClick) {
    e.preventDefault();
    if (
      inputs.email === userDatas[0].email &&
      inputs.password === userDatas[0].password
    ) {
      navigate('/feed');
      onClick(false);
      //storage.setItem('isLoggedIn', 'true');
    }
  }

  function handleInput(e) {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  }
  return [prevent, handleSubmit, handleInput, inputs];
}
