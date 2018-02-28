import Loadable from "react-loadable";
import LoadingBar from "../components/common/loadingBar";
import withAuthentication from "../utils/withAuthentication";

const AsyncHome = Loadable({
  loader: () => import("../views/home"),
  loading: LoadingBar
});

const AsyncLogin = Loadable({
  loader: () => import("../views/login"),
  loading: LoadingBar
});

const AsyncSurveys = Loadable({
  loader: () => import("../views/surveys"),
  loading: LoadingBar
});

const AsyncSurveysDashboard = Loadable({
  loader: () => import("../components/surveyDashboard"),
  loading: LoadingBar
});

const AsyncSurveyCreate = Loadable({
  loader: () => import("../components/surveyDashboard/SurveyCreate"),
  loading: LoadingBar
});

const AsyncNoMatch = Loadable({
  loader: () => import("../views/noMatch"),
  loading: LoadingBar
});

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
