import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import store from './app/store'
import { Provider } from 'react-redux'
import Root from './routes/root';
import ErrorPage from './error-page';
import Home from './pages/home';
import About from './pages/about';
import TodoList from './pages/todoList';
import './index.css'
import Account from './pages/account';
import Logout from './pages/logout';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/todolist",
        element: <TodoList />,
      },
      {
        path: "/account",
        element: <Account />,
      },
      {
        path: "/logout",
        element: <Logout />,
      },

    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
