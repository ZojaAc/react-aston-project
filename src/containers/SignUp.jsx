import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FormTemplate } from "./FormTemplate";
import { setUser } from "../store/userSlice";
import {store} from '../store/store';

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegister = (login, password, isUserAutorized) => {
    localStorage.setItem('loginData', login);
    localStorage.setItem('passwordData', password);

    dispatch(setUser({
      login: login,
      password: password,
      isUserAutorized: true,
    }));
    navigate('/');
    // console.log(store.getState());
  }

  return (
    <FormTemplate
      title='Sign Up'
      handleClick={handleRegister}
    />
  )
}

export {SignUp}