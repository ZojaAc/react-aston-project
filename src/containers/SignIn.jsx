import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FormTemplate } from "./FormTemplate";
import { setUser } from "../store/userSlice";


const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (login, password, isUserAutorized) => {
    const loginData = localStorage.getItem('loginData', login);
    const passwordData = localStorage.getItem('passwordData', password);

    if(loginData !== login) {
      console.log('wrong name');
    } 
    else if (loginData === login && passwordData !== password) {
      console.log('wrong password');
    } 
    else if (loginData === login && passwordData === password) {
      dispatch(setUser({
        login: login,             /// дублирование???
        password: password,
        isUserAutorized: true,
      }));
      navigate('/');
    }
  }

  return (
    <FormTemplate
      title='Sign In'
      handleClick={handleLogin}
    />
  )
}

export {SignIn}