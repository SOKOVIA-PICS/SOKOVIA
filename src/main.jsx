import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Login from './pages/Login/Login';
import Signup from './pages/SignUp/Signup';
import Home from './pages/Home/Home';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBcEg1GEDhYlCY2WRy47Ke7mt2gHBwvz_o",
    authDomain: "sokovia-16549.firebaseapp.com",
    projectId: "sokovia-16549",
    storageBucket: "sokovia-16549.appspot.com",
    messagingSenderId: "512182671905",
    appId: "1:512182671905:web:e904b5bbdb24731fe16160"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/signup",
        element: <Signup />
    }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );