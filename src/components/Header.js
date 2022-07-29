import React, {useState} from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useAuth } from '../hooks/auth';
import { removeUser } from "../store/userSlice";

export default function Header() { 
  const dispatch = useDispatch();

  const {isAuth, login} = useAuth();

  // const userName = useSelector((state) => state.login);
  const userName = localStorage.getItem('loginData').charAt(0).toUpperCase() + localStorage.getItem('loginData').slice(1);
 
  return (
    <div className="header flex flex--btw">
      <Link to='/'>
        <div className="header__main-box flex">
          <h1 className="header__main-name">Find your beer</h1>
          <img className="header__main-logo" src="./img/logo.png" alt="logo"/>
        </div>
      </Link>

      <ul className="flex flex--btw">
        {
          isAuth ? (
            <div className="flex flex--btw">
              <span className="header__username">Hello, {userName}!</span>
              <Link to='/favorites'>
                <li className="header__sign btn header__favorites">Favorites</li>
              </Link>
              <Link to='/history'>
                <li className="header__sign btn header__history">History</li>
              </Link>
              <button className="header__sign btn header__sign--out"
                onClick={() => dispatch(removeUser())}
                >Sign Out
              </button>
            </div>
          ) : (
            <div className="flex flex--btw">
              <Link to='/signin'>
                <li className="header__sign btn header__sign--in">Sign In</li>
              </Link>
              <Link to='/signup'>
                <li className="header__sign btn header__sign--up">Sign Up</li>
              </Link>
            </div>
          )
        } 
      </ul>      
    </div>
  )    
}