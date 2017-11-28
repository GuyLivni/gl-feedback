import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware                                   from 'redux-thunk';
import apiMiddleware                                     from '../middlewares/apiMiddleware';
import redirectMiddleware                                from '../middlewares/redirectMiddleware';
import reducers                                          from '../reducers';

export default function configureStore( initialState ) {
  const rootReducer = combineReducers( reducers );
  const middlewares = [thunkMiddleware, redirectMiddleware, apiMiddleware];

  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middlewares)
  );
}