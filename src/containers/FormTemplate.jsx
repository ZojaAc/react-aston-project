import { useState } from "react";


const FormTemplate = ({ title, handleClick }) => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  return (
    <form className="form flex">
      <div className="form__box">
        <input className="form__input input" 
          type='login'
          value={login}
          onChange={(e) => setLogin(e.target.value)}
          placeholder='Your username'
          required 
          autoFocus
        />
      </div>
      <div className="form__box">
        <input className="form__input input" 
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder='Your password'
          required
        />
      </div>
      <div className="form__box">
        <input className="form__btn btn"
          placeholder={title}          
          onClick={() => handleClick(login, password)}
        >          
        </input>
      </div>      
    </form>
  )
}

export {FormTemplate}