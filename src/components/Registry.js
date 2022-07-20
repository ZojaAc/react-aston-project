import React from "react";

export default function Registry() {
  return (
    <>
      <div className="registry">
        <h2 className="registry__title title">Создайте логин и пароль</h2>
        <form className="registry__form form flex">
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