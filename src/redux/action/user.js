export const userLogin = (username) => {
  return {
    type: "USER_LOGIN",
    payload: username,
  };
};

export const userLogout = () => {
  localStorage.removeItem("username");
  return {
    type: "USER_LOGOUT",
  };
};
