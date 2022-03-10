import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from '@redux-saga/core';
import reducer from './reducer';
import saga from './saga';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];
const composedEnhancers = composeWithDevTools(applyMiddleware(...middlewares));
const store = createStore(reducer, composedEnhancers);

sagaMiddleware.run(saga);

export default store;
