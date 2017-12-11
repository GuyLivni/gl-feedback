import { createStore, applyMiddleware,
         combineReducers, compose }     from 'redux';
import thunkMiddleware                  from 'redux-thunk';
import logger                           from 'redux-logger';
import apiMiddleware                    from '../middlewares/apiMiddleware';
import redirectMiddleware               from '../middlewares/redirectMiddleware';
import reducers                         from '../reducers';

const configureStore = initialState => {
  const rootReducer = combineReducers( reducers );
  const middlewares = [thunkMiddleware, redirectMiddleware, apiMiddleware, logger];

  const composeEnhancers = (typeof window === "object" && typeof window.devToolsExtension !== "undefined") ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ :
    compose;

  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(...middlewares))
  );

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      store.replaceReducer(rootReducer)
    })
  }

  return store;
};

export default configureStore;