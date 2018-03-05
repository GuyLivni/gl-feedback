import Loadable from "react-loadable";
import LoadingBar from "../components/common/loadingBar";

const AsyncHome = Loadable({
  loader: () => import("../views/home"),
  loading: LoadingBar
});

const AsyncLogin = Loadable({
  loader: () => import("../views/login"),
  loading: LoadingBar
});

const AsyncSurveys = Loadable({
  loader: () => import("../views/survey"),
  loading: LoadingBar
});

const AsyncSurveysDashboard = Loadable({
  loader: () => import("../components/survey"),
  loading: LoadingBar
});

const AsyncSurveyCreate = Loadable({
  loader: () => import("../components/survey/SurveyCreate"),
  loading: LoadingBar
});

const AsyncNoMatch = Loadable({
  loader: () => import("../views/noMatch"),
  loading: LoadingBar
});

export {
  AsyncHome,
  AsyncLogin,
  AsyncSurveys,
  AsyncSurveysDashboard,
  AsyncSurveyCreate,
  AsyncNoMatch
};
