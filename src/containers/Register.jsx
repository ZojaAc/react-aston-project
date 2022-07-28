import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FormTemplate } from "./FormTemplate";
import { setUser } from "../store/userSlice";


const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegister = (login, password, isUserAutorized) => {
    localStorage.setItem('loginData', login);
    localStorage.setItem('passwordData', password);

    // const createUserWithPassword = createUserWithPassword();
    // createUserWithPassword(login, password, isUserAutorized)  
    //   .then(({ user }) => {
      dispatch(setUser({
        login: login,
        password: password,
        isUserAutorized: true,
      }));
      navigate('/');
    }
      // .catch(console.error)
  // }  

  return (
    <FormTemplate
      title='register in'
      handleClick={handleRegister}
    />
  )
}

export {Register}