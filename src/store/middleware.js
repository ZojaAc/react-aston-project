export const middlewareHistory = (store) => (next) => (action) => {
  
  const result = next(action);

  localStorage.setItem('history', (`${store.getState().user.userHistory}`));
  
  return result;
}
