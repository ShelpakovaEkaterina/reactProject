import { call, put, takeLatest } from 'redux-saga/effects';
import createRequest from '../create-request';
import { fetchTasks, deleteTask } from '../api-config';
import {
    fetchTasksSuccessAction,
    fetchTasksErrorAction,
    taskDeleteSuccessAction
} from '../actions';

function* fetchTaskSaga(action) {
    try {
        const response = yield call(createRequest, fetchTasks);
        yield put(fetchTasksSuccessAction(response.data));
    } catch (error) {
        yield put(fetchTasksErrorAction(error));
    }
}

function* deleteTaskSaga(action) {
    yield call(createRequest, deleteTask, { id: action.id });
    yield put(taskDeleteSuccessAction(action.id));
}

function* fetchTaskWatcher() {
    yield [takeLatest('FETCH_TASKS', fetchTaskSaga), takeLatest('DELETE_TASK', deleteTaskSaga)];
}

export default fetchTaskWatcher;
