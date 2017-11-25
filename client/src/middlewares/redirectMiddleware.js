import createMiddleware from '../utils/createMiddleware';
import * as types       from '../actions/types';

const redirectMiddleware = createMiddleware([
  {
    action: types.SURVEY_ADD,
    afterHandler: (store, action) => action.redirect('/surveys')
  }
]);

export default redirectMiddleware;