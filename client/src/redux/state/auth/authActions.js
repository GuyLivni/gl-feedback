import { authTypes } from "./";

const fetchUser = () => ({
  type: authTypes.FETCH_USER,
  request: {
    method: "get",
    url: "/api/me"
  }
});

const logoutUser = () => ({
  type: authTypes.SIGNOUT_USER,
  request: {
    method: "get",
    url: "/api/logout"
  }
});

const handleToken = () => ({
  type: authTypes.FETCH_USER,
  request: {
    method: "post",
    url: "/api/stripe"
  }
});

export { handleToken, logoutUser, fetchUser };
