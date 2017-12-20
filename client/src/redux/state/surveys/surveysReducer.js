import moment  from 'moment';
import types   from './surveysTypes';

export default function (state = [], action) {
  switch (action.type) {
    case types.GET_SURVEYS:
      return action.payload.surveys;

    case types.REMOVE_SURVEY:
      return state.filter(survey => survey._id !== action.payload.survey._id);

    case types.SORT_SURVEYS:
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
