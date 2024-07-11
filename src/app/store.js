import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../features/login/loginSlice";
import todoReducer from "../features/todo/todoSlice";
import loaderReducer from "../features/loader/loaderSlice";

export default configureStore({
  reducer: {
    login: loginReducer,
    todo: todoReducer,
    loader: loaderReducer
  },
});
