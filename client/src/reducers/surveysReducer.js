import {SURVEY_GET, SURVEY_REMOVE} from '../actions/types';

export default function (state = [], action) {
  switch (action.type) {
    case SURVEY_GET:
      return action.payload.surveys;
    case SURVEY_REMOVE:
      return state.filter(survey => survey._id !== action.payload.survey._id);
    default:
      return state;
  }
}
