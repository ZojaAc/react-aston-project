import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice';
import { middlewareHistory } from "./middleware";
import { apiRequest } from "../request/apiRequest";

export const store = configureStore({
  reducer: {
    user: userReducer,
    [apiRequest.reducerPath]: apiRequest.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middlewareHistory, apiRequest.middleware), 
});
