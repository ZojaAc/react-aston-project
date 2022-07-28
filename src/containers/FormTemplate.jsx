import { useState } from "react";


const FormTemplate = ({ title, handleClick }) => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      <input
        type='login'
        value={login}
        onChange={(e) => setLogin(e.target.value)}
        placeholder='login'
      />
      <input
        type='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder='password'
      />
      <button
        // onClick={() => handleClick(login, password)}
        onClick={() => handleClick(login, password)}
      >
        {title}
      </button>
    </>
  )
}

export {FormTemplate}