import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userReducer from './userSlice';
import { middlewareHistory } from "./middleware";

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middlewareHistory),
});
