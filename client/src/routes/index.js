import withAuthentication    from '../enhancers/withAuthentication';
import Home                  from '../components/home';
import Login                 from '../components/login';
import SurveysDashboard      from '../components/surveysDashboard';
import SurveysMain           from '../components/surveys';
import SurveyNew             from '../components/surveys/SurveyNew';

const routes = [
  {
    path: '/login',
    component: Login,
    exact: true
  },
  {
    path: '/',
    component: Home,
    exact: true
  },
  {
    path: '/surveys',
    component: withAuthentication(SurveysDashboard),
    routes: [
      {
        path: '/surveys/list',
        component: SurveysMain
      },
      {
        path: '/surveys/new',
        component: SurveyNew,
      },
    ]
  }
];

export default routes;