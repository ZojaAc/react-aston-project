import React, {useState} from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
// import { Navigate } from "react-router-dom";
import { useAuth } from '../hooks/auth';
import { removeUser } from "../store/userSlice";

export default function Header() { 
  const dispatch = useDispatch();

  const {isAuth, login} = useAuth();

  return (
    <div className="header flex flex--btw">
      <Link to='/'>
        <div className="header__main-box flex">
          <h1 className="header__main-name">Find your beer</h1>
          <img className="header__main-logo" src="./img/logo.png" alt="logo"/>
        </div>
      </Link>

      {/* временно */}
      {
        isAuth ? (
          <div className="flex flex--btw">
            <span className="header__username">User Name: {login}</span>
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
            <Link to='/login'>
              <li className="header__sign btn header__sign--in">Log In</li>
            </Link>
            <Link to='/register'>
              <li className="header__sign btn header__sign--up">Register Up</li>
            </Link>
          </div>
        )
      } 
    </div>
  )

      {/* // const [isUserIN, setIsUserIN] = React.useState(false);

      // const handleClick = () => {
      //   console.log('exit done');
      //   setIsUserIN(true);
      //   localStorage.clear();
      //   // window.location.reload();
      // } */}
     
      {/* <nav>
        <ul className="flex flex--btw">

          {
            isUserIN ? (
              <div className="flex flex--btw">
                <Link to='/signin'>
                  <li className="header__sign btn header__sign--in">Sign In</li>
                </Link>
                <Link to='/signup'>
                  <li className="header__sign btn header__sign--up">Sign Up</li>
                </Link>
              </div>
            ) : (
              <div className="flex flex--btw">
                <span className="header__username">User Name</span>
                <Link to='/favorites'>
                  <li className="header__sign btn header__favorites">Favorites</li>
                </Link>
                <Link to='/history'>
                  <li className="header__sign btn header__history">History</li>
                </Link>
                <li className="header__sign btn header__sign--out" onClick={handleClick}>Sign Out</li>
              </div>
            )
          }                           

        </ul>
      </nav> */}

}