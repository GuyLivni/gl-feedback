import withAuthentication    from '../utils/withAuthentication';
import Home                  from '../views/home';
import Login                 from '../views/login';
import Surveys               from '../views/surveys';
import SurveyDashboard       from '../components/surveyDashboard';
import SurveyCreate          from '../components/surveyDashboard/SurveyCreate';
import NoMatch               from '../views/noMatch';

const routes = [
  {
    path: '/',
    component: Home,
    exact: true
  },
  {
    path: '/login',
    component: Login,
    exact: true
  },
  {
    path: '/surveys',
    component: withAuthentication(Surveys),
    routes: [
      {
        path: '/surveys',
        component: SurveyDashboard,
        exact: true
      },
      {
        path: '/surveys/new',
        component: SurveyCreate,
        exact: true
      },
    ]
  },
  {
    path: '',
    component: NoMatch
  },
];

export default routes;