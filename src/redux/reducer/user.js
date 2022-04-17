const init_state = {
  isUserLogin: false,
  username: "",
};

const reducer = (state = init_state, action) => {
  switch (action.type) {
    case "USER_LOGIN":
      return {
        ...state,
        isUserLogin: true,
        username: action.payload,
      };
    case "USER_LOGOUT":
      return { ...init_state };
    default:
      return state;
  }
};

export default reducer;
