import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware                                   from 'redux-thunk';
import apiMiddleware                                     from '../middlewares/apiMiddleware';
import reducers                                          from '../reducers';

const configureStore = initialState => {
  const rootReducer = combineReducers( reducers );
  const middlewares = [thunkMiddleware, apiMiddleware];

  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middlewares)
  );
};

export default configureStore;