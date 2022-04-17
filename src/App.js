import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

import { userLogin } from "./redux/action/user";

import "bootstrap/dist/css/bootstrap.css";
import "./supports/main.css";

import Home from "./pages/Home";
import NavHeader from "./component/NavHeader";
import Posting from "./pages/Posting";
import Login from "./pages/Login";
import About from "./pages/About";

function App() {
  const dispatch = useDispatch();
  const username = localStorage.getItem("username");

  useEffect(() => {
    dispatch(userLogin(username));
  }, []);

  return (
    <div>
      <BrowserRouter>
        <NavHeader />
        <Routes>
          <Route element={<Posting />} path="/posting" />
          <Route element={<Login />} path="/login" />
          <Route element={<About />} path="/about" />
          <Route element={<Home />} path="/" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
