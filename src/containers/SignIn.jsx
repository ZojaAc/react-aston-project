import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FormTemplate } from "./FormTemplate";
import { setUser } from "../store/userSlice";
import {store} from '../store/store';

const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (login, password, isUserAutorized) => {
    const loginData = localStorage.getItem('loginData', login);
    const passwordData = localStorage.getItem('passwordData', password);

    if(loginData !== login) {
      const text1 = document.getElementById('wrongName');
      text1.style.display = 'block';
    } 
    else if (loginData === login && passwordData !== password) {
      const text2 = document.getElementById('wrongPassword');
      text2.style.display = 'block';
    } 
    else if (loginData === login && passwordData === password) {
      dispatch(setUser({
        login: login,            
        password: password,
        isUserAutorized: true,
      }));
      navigate('/');
      // console.log(store.getState());
    }
  }

  return (
    <>
      <FormTemplate
        title='Sign In'
        handleClick={handleLogin}
      />
      <span id="wrongName">You type wrong name!</span>
      <span id="wrongPassword">You type wrong password!</span>
    </>
    
  )
}

export {SignIn}