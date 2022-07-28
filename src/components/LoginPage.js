import { Link } from "react-router-dom";
import { Login } from "../containers/Login";

export default function LoginPage() {
  return (
    <>
      <h3>Войдите</h3>
      <Login />
      <p>
        or create your account
        <Link to='/register'>Sign Un</Link>     
      </p>
    </>
  )
}
