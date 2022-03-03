import CssBaseline from "@material-ui/core/CssBaseline";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Signin from "./Components/signin/Signin";
import Signup from "./Components/signup/signup";
import "./index.css";
ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <BrowserRouter>
      <Routes>
        <Route path="Signin" element={<Signin />} />
        <Route path="/" element={<App />} />
        <Route path="signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
    {/* <App /> */}
  </React.StrictMode>,
  document.getElementById("root")
);
