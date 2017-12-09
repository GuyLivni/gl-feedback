import {SURVEY_GET, SURVEY_REMOVE, SURVEY_SORT} from '../actions/types';
import moment                                   from 'moment';

export default function (state = [], action) {
  switch (action.type) {
    case SURVEY_GET:
      return action.payload.surveys;

    case SURVEY_REMOVE:
      return state.filter(survey => survey._id !== action.payload.survey._id);

    case SURVEY_SORT:
      const sortKey = action.payload;
      return [...state.sort( (a, b) => {
        if (sortKey === 'no' || sortKey === 'yes') {
          return b[sortKey] - a[sortKey];
        }
        if (sortKey === 'title') {
          return a[sortKey] > b[sortKey] ? 1 : a[sortKey] < b[sortKey] ? -1 : 0;
        }
        if (sortKey === 'dateSent') {
          return moment.utc(b[sortKey]).diff(moment.utc(a[sortKey]))
        }
        return 0;
      })];

    default:
      return state;
  }
}
