import {USER_SIGNIN, SURVEY_ADD, USER_SIGNOUT} from '../actions/types';

const initialState = {
  user: {},
  isAuthenticated: false
};

export default function (state = initialState, action) {
  switch (action.type) {
    case USER_SIGNIN:
    case SURVEY_ADD:
      return Object.assign({}, state, {
        user: action.payload,
        isAuthenticated: !!action.payload._id || false
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
