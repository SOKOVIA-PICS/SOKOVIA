import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components";
import { Explore, Home, Login, NotFound, Signup } from "./pages";
import ProviderContext from "./context/ProviderContext";

const App = () => (
  <>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/explore" element={<Explore />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </>
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ProviderContext>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ProviderContext>
  </React.StrictMode>
);
