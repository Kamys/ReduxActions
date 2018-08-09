import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducer from './entries/rootReducers';
import saga from './entries/rootSaga';

const sagaMiddleware = createSagaMiddleware();

const createCustomStore = (() => {
  const store: any = createStore(reducer, {}, applyMiddleware(sagaMiddleware));

  store.runSagaTask = () => {
    store.sagaTask = sagaMiddleware.run(saga);
  };
  store.runSagaTask();

  return store;
})();

export const store = createCustomStore;
