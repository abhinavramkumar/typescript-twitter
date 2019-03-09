import {all, put, takeEvery, takeLatest} from 'redux-saga/effects';
import {
  CREATE_TWEET,
  DELETE_TWEET,
  LOAD_INITIAL_TWEETS,
  LOAD_MORE_TWEETS,
} from '../../constants';

export function* CreateTweet({payload}) {
  yield put({
    type: CREATE_TWEET,
    payload: {
      tweet: payload.tweet,
    },
  });
}

export function* DeleteTweet({payload}) {
  yield put({
    type: DELETE_TWEET,
    payload: {
      id: payload.id,
    },
  });
}

export function* LoadInitialTweets({payload}) {
  yield put({
    type: LOAD_INITIAL_TWEETS,
    payload: {
      tweets: payload.tweets,
    },
  });
}

export function* LoadMoreTweets({payload}) {
  yield put({
    type: LOAD_MORE_TWEETS,
    payload: {
      tweets: payload.tweets,
    },
  });
}

export function* watchLoadMoreTweets(payload) {
  yield takeLatest(`ASYNC_${LOAD_MORE_TWEETS}`, LoadMoreTweets);
}

export function* watchLoadInitialTweets(payload) {
  yield takeLatest(`ASYNC_${LOAD_INITIAL_TWEETS}`, LoadInitialTweets);
}

export function* watchDeleteTweet(payload) {
  yield takeLatest(`ASYNC_${DELETE_TWEET}`, DeleteTweet);
}

export function* watchCreateTweet(payload) {
  yield takeEvery(`ASYNC_${CREATE_TWEET}`, CreateTweet);
}

export function* rootSaga() {
  yield all([
    watchCreateTweet(),
    watchDeleteTweet(),
    watchLoadInitialTweets(),
    watchLoadMoreTweets(),
  ]);
}
