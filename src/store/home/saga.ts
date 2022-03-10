import { all, takeEvery } from 'redux-saga/effects';
import * as actions from './actions';
import * as actionsTypes from './actions-types';

function* worker(action: ReturnType<typeof actions.action>) {
  console.log('Saga executed', action);
  yield;
}

function* watcher() {
  yield takeEvery(actionsTypes.ACTION_TYPE, worker);
}

export default function* homeSaga() {
  yield all([watcher()]);
}
