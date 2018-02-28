import withAuthentication from "../utils/withAuthentication";
import {
  AsyncHome,
  AsyncNoMatch,
  AsyncLogin,
  AsyncSurveyCreate,
  AsyncSurveys,
  AsyncSurveysDashboard
} from "./asyncRoutes";

const routes = [
  {
    path: "/",
    component: AsyncHome,
    exact: true
  },
  {
    path: "/login",
    component: AsyncLogin,
    exact: true
  },
  {
    path: "/surveys",
    component: withAuthentication(AsyncSurveys),
    routes: [
      {
        path: "/surveys",
        component: AsyncSurveysDashboard,
        exact: true
      },
      {
        path: "/surveys/new",
        component: AsyncSurveyCreate,
        exact: true
      }
    ]
  },
  {
    path: "",
    component: AsyncNoMatch
  }
];

export default routes;
