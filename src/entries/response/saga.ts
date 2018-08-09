import { call, put, takeEvery } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import { ResponseActions } from 'src/entries/response/actions';
import { errorHandler } from 'src/errorHandler';

function* read() {
  try {
    const response: AxiosResponse<any> = yield call(ResponseApi.read);
    yield put(ResponseActions.read.SUCCESS(response.data));
  } catch (e) {
    yield call(errorHandler, e);
    console.log('Failed notification loading');
    yield put(ResponseActions.read.FAILURE({}));
  }
}

function* watcherUser() {
  yield [
    takeEvery(ResponseActions.read.REQUEST, read),
  ];
}

export default [watcherUser];
