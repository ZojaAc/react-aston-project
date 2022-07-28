import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FormTemplate } from "./FormTemplate";
import { setUser } from "../store/userSlice";


const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (login, password, isUserAutorized) => {
    // const signInWithPassword = signInWithPassword();
    // signInWithPassword(login, password, isUserAutorized)
    //   .then(({ user }) => {
        dispatch(setUser({
          login: login,
          password: password,
          isUserAutorized: true,
        }));
        navigate('/');
      }
  //     .catch(() => alert('invalid user'))
  // }  

  return (
    <FormTemplate
      title='log in'
      handleClick={handleLogin}
    />
  )
}

export {Login}