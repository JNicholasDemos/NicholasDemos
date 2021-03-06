/*
 * Home Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import { CHANGE_USERNAME, GET_MUSIC, GET_MUSIC_SUCCEEDED, UPDATE_GAME_STATE, SET_AUDIO_CHANGED } from './constants';

/**
 * Changes the input field of the form
 *
 * @param  {name} name The new text of the input field
 *
 * @return {object}    An action object with a type of CHANGE_USERNAME
 */
export function getMusic(name) {
  return {
    type: GET_MUSIC,
    name,
  };
}

export function setaudioChanged() {
  return {
    type: SET_AUDIO_CHANGED,
  };
}

export function getMusicSucceeded(data) {
  return {
    type: GET_MUSIC_SUCCEEDED,
    getMusic: data,
  };
}

export function changeGameState(state) {
  return {
    type: UPDATE_GAME_STATE,
    state,
  };
}

export function changeUsername(name) {
  return {
    type: CHANGE_USERNAME,
    name,
  };
}
