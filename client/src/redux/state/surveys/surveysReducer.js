import { surveysTypes, surveysSelectors } from "./";
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
      const sortKey = action.payload;
      return [
        ...surveysSelectors.getSortedSurveys(state, sortKey)
      ];

    default:
      return state;
  }
}
