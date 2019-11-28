import { all,put, takeEvery, takeLatest } from 'redux-saga/effects'
import {increase} from './counter'
const delay = (ms) => new Promise(res => setTimeout(res, ms))

// ...

// Our worker Saga: will perform the async increment task
 function* incrementAsync() {

    console.log("1");
  yield delay(5000)
  yield put(increase())
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
 function* watchIncrementAsync() {
  yield takeLatest('INCREMENT_ASYNC', incrementAsync)
}

function* helloSaga() {
    console.log('Hello Sagas!')
  }

export default function* rootSaga() {
    yield all([
      helloSaga(),
      watchIncrementAsync()
    ])
}