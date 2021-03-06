/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import { LOAD_REPOS } from 'containers/App/constants';
import { reposLoaded, repoLoadingError } from 'containers/App/actions';

import request from 'utils/request';
import { makeSelectUsername } from 'containers/GamePage/selectors';
import { GET_MUSIC } from './constants';
import { getMusicSucceeded } from './actions';
import * as gameApi from '../../api/game';

/**
 * Github repos request/response handler
 */
function* getRepos() {
  // Select username from store
  const username = yield select(makeSelectUsername());
  const requestURL = `https://api.github.com/users/${username}/repos?type=all&sort=updated`;

  try {
    // Call our request helper (see 'utils/request')
    const repos = yield call(request, requestURL);
    yield put(reposLoaded(repos, username));
  } catch (err) {
    yield put(repoLoadingError(err));
  }
}
function* getMusic(vidId) {
  // console.log('vidId');
  // console.log(vidId.name);
  try {
    let response = null;
    response = yield call(gameApi.getMusicData, vidId.name);
    // console.log('We get signal');
    // console.log(response);
    if (response !== null && response !== undefined) {
      yield put(getMusicSucceeded(response));
    } else {
      console.log('oops');
      // yield put(getMusicFailed('something happened'));
    }
  } catch (err) {
    console.log('oops');
    // yield put(getMusicFailed(e.message));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* githubData() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(LOAD_REPOS, getRepos);
  yield takeLatest(GET_MUSIC, getMusic);
}
