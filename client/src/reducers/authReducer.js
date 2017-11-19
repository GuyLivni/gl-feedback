import {SET_USER, LOGOUT_USER} from '../actions/types';

const initialState = {
  user: {},
  isAuthenticated: false
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      return Object.assign({}, state, {
        user: action.payload,
        isAuthenticated: !!action.payload._id || false
      });

    case LOGOUT_USER:
      return Object.assign({}, state, {
        user: null,
        isAuthenticated: false
      });

    default:
      return state;
  }
}
