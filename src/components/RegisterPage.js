import { Link } from "react-router-dom";
import { Register } from "../containers/Register";

export default function RegisterPage() {
  return (
    <>
      <h3>Зарегистрируйтесь</h3>
      <Register />
      <p>
        Have you already an account?
        <Link to='/login'>Sign In</Link>     
      </p>
    </>
  )
}


// export default function SignIn() {
//   const login = useRef();
//   const password = useRef();
//   const loginFrLS = localStorage.getItem('loginData');
//   const passwordFrLS = localStorage.getItem('passwordData');

//   const handleSubmit = () => {    
//     if(login.current.value === loginFrLS && password.current.value === passwordFrLS) {
//       localStorage.setItem('loginData', login.current.value);
//       localStorage.setItem('passwordData', password.current.value);
//       alert('you are success')
//     } else {alert('you are not registreted')}
//   }

//   return (
//     <>
//       {
//         (loginFrLS && passwordFrLS) ? <Home /> :

//         <div className="signin">
//           <h2 className="signin__title title">Sign In</h2>
//           <form className="signin__form form flex" onSubmit={handleSubmit}>
//             <div className="form__box">
//               <input className="form__input input" ref={login} id="userLogin" type='text' placeholder="Enter your login" required autoFocus />
//             </div>
//             <div className="form__box">
//               <input className="form__input input" ref={password} id="userPassword" type='text' placeholder="Enter your password" required />
//             </div>
//             <div className="form__box">
//               <input className="form__btn btn" type='submit' value='Sign In' />
//             </div>
//           </form>         
//         </div>

//       }

//     </>
//   )  
// }