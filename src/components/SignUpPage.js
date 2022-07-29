import { Link } from "react-router-dom";
import { SignUp } from '../containers/SignUp';


export default function SignUpPage() {
  return (
    <>
      <h2 className="title">Sign Up</h2>
      <SignUp />
      <p className="title__link">
        Have you already an account?
        <Link to='/signin'>
          <span className="title__link-a">Sign In</span>
        </Link>     
      </p>
    </>
  )
}

