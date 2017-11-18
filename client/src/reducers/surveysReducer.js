import {SET_SURVEYS, DELETE_SURVEY} from '../actions/types';

export default function (state = [], action) {
  switch (action.type) {
    case SET_SURVEYS:
      return action.payload;
    case DELETE_SURVEY:
      return state.filter(survey => survey._id !== action.payload._id);
    default:
      return state;
  }
}
