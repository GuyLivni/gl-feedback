import {USER_FETCH, SURVEY_ADD, USER_SIGNOUT} from '../actions/types';

const initialState = {
  user: {},
  isAuthenticated: false
};

export default function (state = initialState, action) {
  switch (action.type) {
    case USER_FETCH:
    case SURVEY_ADD:
      return Object.assign({}, state, {
        user: action.payload.user,
        isAuthenticated: !!action.payload.user._id || false
      });

    case USER_SIGNOUT:
      return Object.assign({}, state, {
        user: null,
        isAuthenticated: false
      });

    default:
      return state;
  }
}
