import React from "react";
import { Link } from "react-router-dom";


export default function Header() {
  return (
    <div className="header flex flex--btw">
      <Link to='/'>
        <div className="header__main-box flex">
          <h1 className="header__main-name">Название сайта</h1>
          <img className="header__main-logo" src="" alt="logo"/>
        </div>
      </Link>
      <nav>
        <ul className="flex flex--btw">
          <Link to='/signin'>
            <li className="header__sign btn header__sign--in">Вход</li>
          </Link>
          <Link to='/signup'>
            <li className="header__sign btn header__sign--up">Регистрация</li>
          </Link>
        </ul>
      </nav>
    </div>
  )
}