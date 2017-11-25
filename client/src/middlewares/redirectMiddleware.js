import createMiddleware from '../utils/createMiddleware';
import { SURVEY_ADD }   from '../actions/types';

const redirectMiddleware = createMiddleware([
  {
    action: SURVEY_ADD,
    afterHandler: (store, action) => action.redirect('/surveys')
  }
]);

export default redirectMiddleware;