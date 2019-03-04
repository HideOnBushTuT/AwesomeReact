// import { ca } from 'redux-saga';
import { takeEvery, put, call } from 'redux-saga/effects';

import { INCREMENT_ASYNC, INCREMENT, increment, fetchName, FETCH_NAME, fetchSuccess, fetchFail } from '../Redux/Counter';

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))

function* incrementAsync() {
    console.log('Hello sunday');
    yield delay(2000);
    yield put(increment());
}

function* fetchNameAsync() {
    try {
        const response = yield call('https://api.randomuser.me/');
        yield put(fetchSuccess(response));
    } catch (error){
        yield put(fetchFail(error));
    }
}

export function* watchIncrementAsync() {
    console.log('Hello Saga');
    yield takeEvery(INCREMENT_ASYNC, incrementAsync);
    yield takeEvery(FETCH_NAME, fetchNameAsync);
}

// const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// export function* incrementAsyncCall() {
//     yield delay(2000);
//     yield put(increment());
//     console.log('Hello Saga');
// }

// export function* incrementAsyncSaga() {
//     yield takeEvery(INCREMENT_ASYNC, incrementAsyncCall());
// }
