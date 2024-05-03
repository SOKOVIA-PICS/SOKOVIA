import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Signup from "./pages/SignUp/Signup";
import Home from "./pages/Home/Home";
import NewsFeed from "./NewsFeed/Main/NewsFeed";
import Upload from "./NewsFeed/Upload/Upload";

const App = () => (
  <Routes>
    <Route path="/" element={<NewsFeed />} />
    <Route path="/upload_post" element={<Upload />} />
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<Signup />} />
  </Routes>
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
