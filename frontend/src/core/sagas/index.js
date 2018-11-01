import { all } from 'redux-saga/effects';
import tasksSagas from './tasks';

function* rootSaga() {
    yield all([tasksSagas()]);
}

export default rootSaga;
