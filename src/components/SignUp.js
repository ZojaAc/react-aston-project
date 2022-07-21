import React from "react";

export default function SignUp() {
  return (
    <>
      <div className="signup">
        <h2 className="signup__title title">Создайте логин и пароль</h2>
        <form className="signup__form form flex">
          <div className="form__box">
            <input className="form__input input" id="userLogin" type='text' placeholder="Логин" required autoFocus />
          </div>
          <div className="form__box">
            <input className="form__input input" id="userPassword" type='text' placeholder="Пароль" required />
          </div>
          <div className="form__box">
            <input className="form__btn btn" type='submit' value='зарегистрироваться' />
          </div>
        </form>
      </div>
    </>
  )  
}