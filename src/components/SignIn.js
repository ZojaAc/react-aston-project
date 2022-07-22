import React, {useRef} from "react";
import Home from "./Home";

export default function SignIn() {
  const login = useRef();
  const password = useRef();
  const getLogin = localStorage.getItem('loginData');
  const getPassword = localStorage.getItem('passwordData');

  const handleSubmit = () => {
    if(login.current.value === getLogin && password.current.value === getPassword) {
      localStorage.setItem('loginData', login.current.value);
      localStorage.setItem('passwordData', password.current.value);
      alert('you are success')
    } else {alert('you are not registreted')}
  }

  return (
    <>
      {
        getLogin && getPassword ? <Home /> :

        <div className="signin">
          <h2 className="signin__title title">Sign In</h2>
          <form className="signin__form form flex" onSubmit={handleSubmit}>
            <div className="form__box">
              <input className="form__input input" ref={login} id="userLogin" type='text' placeholder="Enter your login" required autoFocus />
            </div>
            <div className="form__box">
              <input className="form__input input" ref={password} id="userPassword" type='text' placeholder="Enter your password" required />
            </div>
            <div className="form__box">
              <input className="form__btn btn" type='submit' value='Sign In' />
            </div>
          </form>         
        </div>

      }

    </>
  )  
}