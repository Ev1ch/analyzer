import { all } from '@redux-saga/core/effects';
import homeSaga from './home/saga';

function* saga() {
  yield all([homeSaga()]);
}

export default saga;
