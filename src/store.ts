import { configureStore } from "@reduxjs/toolkit";
import authReducer from './features/auth/authSlice'
import todoSlice from "./features/todos/todoSlice";
import counterSlice from "./features/counter/counterSlice";


const store = configureStore({
    reducer: {
        auth: authReducer,
        todos: todoSlice,
        counter: counterSlice
    },
  });

  export type RootType = ReturnType<typeof store.getState>;
  export type AppDispatch = typeof store.dispatch;

  export default store;