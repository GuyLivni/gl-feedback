import types             from './authTypes';
import { surveysTypes }  from '../surveys';

const initialState = {
  user: {},
  isAuthenticated: false,
  hasFetchedUser: false
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.FETCH_USER:
      return Object.assign({}, state, {
        user: action.payload.user,
        isAuthenticated: (action.payload.user && !!action.payload.user._id) || false,
        hasFetchedUser: true
      });

    case types.SIGNOUT_USER:
      return Object.assign({}, state, {
        user: null,
        isAuthenticated: false
      });

    case surveysTypes.ADD_SURVEY:
      return Object.assign({}, state, {
        user: action.payload.user
      });

    default:
      return state;
  }
}
