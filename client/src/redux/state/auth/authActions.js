import types   from './authTypes';
import { API } from '../../middlewares/apiMiddleware';

const signinUser = (payload) => ({
  type: types.FETCH_USER,
  payload
});

const signoutUser = () => ({
  type: types.SIGNOUT_USER
});

const fetchUser = () => ({
  type: API,
  payload: {
    url: '/api/me',
    method: 'get',
    success: signinUser
  }
});

const logoutUser = () => ({
  type: API,
  payload: {
    url: '/api/logout',
    method: 'get',
    success: signoutUser
  }
});

const handleToken = token => ({
  type: API,
  payload: {
    url: '/api/stripe',
    method: 'post',
    body: token,
    success: signinUser
  }
});

export default {
  handleToken,
  logoutUser,
  fetchUser
}