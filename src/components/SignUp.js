import React, {useRef} from "react";
import Home from "./Home";

export default function SignUp() {
  const dataLogin = useRef();
  const dataPassword = useRef();
  const getLogin = localStorage.getItem('loginData');
  const getPassword = localStorage.getItem('passwordData');

  const handleClick = () => {
    localStorage.setItem('loginData', dataLogin.current.value);
    localStorage.setItem('passwordData', dataPassword.current.value);
  }

  return (
    <>
      {
        getLogin && getPassword ? <Home /> :

        <div className="signup">
          <h2 className="signup__title title">Sign Up</h2>
          <form className="signup__form form flex">
            <div className="form__box">
              <input className="form__input input" ref={dataLogin} id="userLogin" type='text' placeholder="Create your username" required autoFocus />
            </div>
            <div className="form__box">
              <input className="form__input input" ref={dataPassword} id="userPassword" type='text' placeholder="Create your password" required />
            </div>
            <div className="form__box">
              <input className="form__btn btn" onClick={handleClick} type='submit' value='Sign Up' />
            </div>
          </form>
        </div>

      }
      
    </>
  )  
}