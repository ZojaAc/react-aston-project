import React from "react";

export default function Entrance() {
  return (
    <>
      <div className="entrance">
        <h2 className="entrance__title title">Введите логин и пароль</h2>
        <form className="entrance__form form flex">
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