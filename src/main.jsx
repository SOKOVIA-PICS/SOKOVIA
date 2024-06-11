import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components";
import { Explore, Home, Login, NotFound, Signup } from "./pages";
import Upload_post from "./NewsFeed/Upload/Upload";

const App = () => (
  <>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/explore" element={<Explore />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/upload_post" element={<Upload_post />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </>
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import Upload from "./NewsFeed/Upload/Upload";

const firebaseConfig = {
  apiKey: "AIzaSyBcEg1GEDhYlCY2WRy47Ke7mt2gHBwvz_o",
  authDomain: "sokovia-16549.firebaseapp.com",
  projectId: "sokovia-16549",
  storageBucket: "sokovia-16549.appspot.com",
  messagingSenderId: "512182671905",
  appId: "1:512182671905:web:e904b5bbdb24731fe16160",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
