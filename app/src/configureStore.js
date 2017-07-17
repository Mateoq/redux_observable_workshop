/**
 * Module with the redux store configuration.
 * @module src/utils/configure-store
 */
// Redux.
import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { routerMiddleware } from 'react-router-redux';
import { createLogger } from 'redux-logger';

/**
 * Create a composed store.
 * @param {Object} reducers -> The app reducer.
 * @param {Object} rootEpic -> The app epics.
 * @param {Object} history -> The router history.
 * @returns {Object} -> Redux store.
 */
const configureStore = (
  reducers,
  rootEpic,
  history
) => {
  // Middlewares.
  const epicMiddleware = createEpicMiddleware(rootEpic);
  const reduxRouterMiddleware = routerMiddleware(history);
  const logger = createLogger();

  const enhancer = applyMiddleware(logger, epicMiddleware, reduxRouterMiddleware);

  const store = createStore(reducers, enhancer);

  return store;
};

export default configureStore;
