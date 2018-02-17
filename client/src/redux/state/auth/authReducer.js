import { authTypes } from "./";
import { handle } from "../../middlewares/api";
import { surveysTypes } from "../surveys";

const initialState = {
  user: {},
  isAuthenticated: false,
  hasFetchedUser: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case authTypes.FETCH_USER:
      return handle(state, action, {
        success: () => {
          return Object.assign({}, state, {
            user: action.payload.user,
            isAuthenticated:
              (action.payload.user && !!action.payload.user._id) || false,
            hasFetchedUser: true
          });
        }
      });

    case authTypes.SIGNOUT_USER:
      return handle(state, action, {
        success: () => {
          return Object.assign({}, state, {
            user: null,
            isAuthenticated: false
          });
        }
      });

    case surveysTypes.ADD_SURVEY:
      return handle(state, action, {
        success: () => {
          return Object.assign({}, state, {
            user: action.payload.user
          });
        }
      });

    default:
      return state;
  }
}
