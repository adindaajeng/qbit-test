import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../redux/action/user";

const Login = () => {
  const [state, setState] = useState({});

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((state) => {
    return state.user;
  });

  const inputHandler = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    setState((state) => ({
      ...state,
      [name]: value,
    }));
  };

  const btnLogin = () => {
    if (state.username && state.password) {
      localStorage.setItem("username", state.username);
      dispatch(userLogin(state.username));
    } else {
      setState((prevState) => ({
        ...prevState,
        message: "username and password cannot be empty",
      }));
    }
  };

  if (user.username) {
    return navigate("/");
  }

  return (
    <div className="m-auto col-8 col-md-4 d-flex flex-column align-items-center">
      <h2 className="my-5">Login Page</h2>
      {state.message && (
        <div className="alert alert-danger">{state.message}</div>
      )}

      <input
        type="text"
        placeholder="username"
        name="username"
        className="form-input"
        onChange={inputHandler}
      />
      <input
        type="password"
        placeholder="password"
        name="password"
        className="form-input"
        onChange={inputHandler}
      />
      <button className="my-4 btn-submit" onClick={btnLogin}>
        Login
      </button>
    </div>
  );
};

export default Login;
