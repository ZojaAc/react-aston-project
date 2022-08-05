import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  login: null,
  password: null,
  isUserAutorized: false,
  userHistory: '',
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
    addHistory: (state, action) => {
			state.userHistory = state.userHistory + action.payload + ',';
		},
  },
});

export const {setUser, offUser, addHistory} = userSlice.actions;

export default userSlice.reducer;
