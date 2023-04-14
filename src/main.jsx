import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import Mian from './Layout/Mian';
import Login from './components/Login/Login';
import GoogleSignIn from './components/GoogleSignIn/GoogleSignIn';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mian></Mian>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/googleSignIn',
        element: <GoogleSignIn></GoogleSignIn>
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />

  </React.StrictMode>,
)
