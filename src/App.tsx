import { createMuiTheme, CssBaseline, ThemeProvider } from "@material-ui/core";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import Signin from "./Pages/signin/Signin";
import SignUp from "./Pages/signup/signup";
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#f0f0f",
    },
  },
});

function App() {
  const auth = localStorage.getItem("token") !== null;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          {/* auth ? null : <Navigate replace to="/" /> */}

          {/* <Route path={path} element={auth ? <Home /> : <Signin />} /> */}
          <Route path="Signin" element={<Signin />} />
          <Route path="/" element={auth ? <Home /> : <Signin />} />
          <Route path="signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
