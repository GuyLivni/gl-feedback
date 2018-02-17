import moment from "moment";
import { surveysTypes } from "./";
import { handle } from "../../middlewares/api";

export default function(state = [], action) {
  switch (action.type) {
    case surveysTypes.GET_SURVEYS:
      return handle(state, action, {
        success: () => {
          return action.payload.surveys;
        }
      });

    case surveysTypes.REMOVE_SURVEY:
      return handle(state, action, {
        success: () => {
          return state.filter(
            survey => survey._id !== action.payload.survey._id
          );
        }
      });

    case surveysTypes.SORT_SURVEYS:
      return handle(state, action, {
        success: () => {
          const sortKey = action.payload;
          return [
            ...state.sort((a, b) => {
              if (sortKey === "no" || sortKey === "yes") {
                return b[sortKey] - a[sortKey];
              }
              if (sortKey === "title") {
                return a[sortKey] > b[sortKey]
                  ? 1
                  : a[sortKey] < b[sortKey] ? -1 : 0;
              }
              if (sortKey === "dateSent") {
                return moment.utc(b[sortKey]).diff(moment.utc(a[sortKey]));
              }
              return 0;
            })
          ];
        }
      });

    default:
      return state;
  }
}
