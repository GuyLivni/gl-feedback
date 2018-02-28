import withAuthentication from "../utils/withAuthentication";
import asyncComponent from "../utils/asyncComponent";

const AsyncHome = asyncComponent(() => import("../views/home"));
const AsyncLogin = asyncComponent(() => import("../views/login"));
const AsyncSurveys = asyncComponent(() => import("../views/surveys"));
const AsyncSurveysDashboard = asyncComponent(() => import("../components/surveyDashboard"));
const AsyncSurveyCreate = asyncComponent(() => import("../components/surveyDashboard/SurveyCreate"));
const AsyncNoMatch = asyncComponent(() => import("../views/noMatch"));

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
