import { Link } from "react-router-dom";
import { SignIn } from "../containers/SignIn";


export default function SignInPage() {
  return (
    <>
      <h2 className="title">Sign In</h2>
      <SignIn />
      <p className="title__link">
        or create your account
        <Link to='/signup'>
          <span className="title__link-a">Sign Un</span>
        </Link>     
      </p>
    </>
  )
}

