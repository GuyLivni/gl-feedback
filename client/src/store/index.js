import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware                                   from 'redux-thunk';
import apiMiddleware                                     from '../middlewares/api';
import reducers                                          from '../reducers';

export default function configureStore( initialState ) {
  const rootReducer = combineReducers( reducers );

  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(
      thunkMiddleware,
      apiMiddleware,
    ),
  );
}