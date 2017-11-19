import withAuthentication    from "../enhancers/withAuthentication";
import Landing               from '../components/landing';
import Login                 from '../components/login';
import Dashboard             from '../components/dashboard';
import SurveyNew             from '../components/surveys/SurveyNew';

const routes = [
  {
    path: "/",
    component: Landing,
    exact: true,
  },
  {
    path: "/login",
    component: Login,
    exact: true,
  },
  {
    path: "/surveys",
    component: withAuthentication(Dashboard),
    exact: true,
  },
  {
    path: "/surveys/new",
    component: withAuthentication(SurveyNew),
    exact: true,
  },
];

export default routes;