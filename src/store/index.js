import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import loginReducer from '../reducer/loginReducer';
import rootSaga from '../sagas/index';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(loginReducer,
  applyMiddleware(sagaMiddleware, logger),
);

sagaMiddleware.run(rootSaga);

export default store;
