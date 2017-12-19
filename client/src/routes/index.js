import withAuthentication    from '../enhancers/withAuthentication';
import Home                  from '../components/home';
import Login                 from '../components/login';
import Surveys               from '../components/surveys';
import SurveyDashboard       from '../components/surveys/SurveyDashboard';
import SurveyNew             from '../components/surveys/SurveyNew';
import NoMatch               from '../components/noMatch';

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
        component: SurveyNew,
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