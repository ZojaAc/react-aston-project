import { useSelector } from "react-redux";

// здесь прописываем права пользователя?

export function useAuth() {
  const {login, password, isUserAutorized} = useSelector(state => state.user);

  return {
    isAuth: !!login,
    password,
    isUserAutorized,
  }
}