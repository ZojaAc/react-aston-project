import React from "react";

export default function SignIn() {
  return (
    <>
      <div className="signin">
        <h2 className="signin__title title">Введите логин и пароль</h2>
        <form className="signin__form form flex">
          <div className="form__box">
            <input className="form__input input" id="userLogin" type='text' placeholder="Логин" required autoFocus />
          </div>
          <div className="form__box">
            <input className="form__input input" id="userPassword" type='text' placeholder="Пароль" required />
          </div>
          <div className="form__box">
            <input className="form__btn btn" type='submit' value='войти' />
          </div>
        </form>
      </div>
    </>
  )  
}