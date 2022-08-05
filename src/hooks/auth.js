import { useSelector } from "react-redux";

export function useAuth() {
  const {login, password, isUserAutorized} = useSelector(state => state.user);

  return {
    isAuth: !!login,
    password,
    isUserAutorized,
  }
}