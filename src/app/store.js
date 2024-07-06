import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../features/login/loginSlice";
import todoReducer from "../features/todo/todoSlice";

export default configureStore({
  reducer: {
    login: loginReducer,
    todo: todoReducer
  },
});
