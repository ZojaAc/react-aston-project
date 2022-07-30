import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  login: null,
  password: null,
  isUserAutorized: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.login = action.payload.login;
      state.password = action.payload.password;
      state.isUserAutorized = true;
    },
    offUser(state) {
      state.login = null;
      state.password = null;
      state.isUserAutorized = false;
    },
  },
});

export const {setUser, offUser} = userSlice.actions;

export default userSlice.reducer;

