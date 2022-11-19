import { takeEvery, put, spawn, retry } from 'redux-saga/effects';
import { fetchServiceRequest, fetchServiceSuccess, fetchServiceFailure } from '../features/service/serviceSlice';
import { fetchServiceListRequest, fetchServiceListSuccess, fetchServiceListFailure } from '../features/serviceList/serviceListSlice';
import { fetchData } from '../api/serviceAPI';

// watcher for service
function* watchFetchServiceRequestSaga() {
  yield takeEvery(fetchServiceRequest, handleFetchRequestSaga, {success: fetchServiceSuccess, failure: fetchServiceFailure});
};

// watcher for serviceList
function* watchFetchServiceListRequestSaga() {
  yield takeEvery(fetchServiceListRequest, handleFetchRequestSaga, {success: fetchServiceListSuccess, failure: fetchServiceListFailure});
};

// worker
function* handleFetchRequestSaga(args, action) {
  console.log('handleFetchServiceRequestSaga', args, action);
  const { url } = action.payload;
  const { success, failure } = args;
  try {
    const retryCount = 0;
    const retryDelay = 1000; // ms
    const data = yield retry(retryCount, retryDelay, fetchData, url);
    yield put(success(data));
  } catch (e) {
    console.log('handleFetchServiceRequestSaga error', e);
    yield put(failure(e.message));
  };
};


export default function* saga() {
    yield spawn(watchFetchServiceRequestSaga);
    yield spawn(watchFetchServiceListRequestSaga);
};