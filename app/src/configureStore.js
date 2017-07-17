/**
 * Module with the redux store configuration.
 * @module src/utils/configure-store
 */
// Redux.
import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { createLogger } from 'redux-logger';

const configureStore = (
  reducers,
  history
) => {
  // Middlewares.
  const reduxRouterMiddleware = routerMiddleware(history);
  const logger = createLogger();

  const enhancer = applyMiddleware(logger, reduxRouterMiddleware);

  const store = createStore(reducers, enhancer);

  return store;
};

export default configureStore;
