// import { delay } from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';

import { INCREMENT_ASYNC, INCREMENT, increment } from '../Redux/Counter';

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))

function* incrementAsync() {
    console.log('Hello sunday');
    yield delay(2000);
    // yield put({ type: INCREMENT });
    yield put(increment());
}

export function* watchIncrementAsync() {
    console.log('Hello Saga');
    yield takeEvery(INCREMENT_ASYNC, incrementAsync)
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
