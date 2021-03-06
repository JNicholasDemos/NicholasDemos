/*
 * HomeConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const CHANGE_USERNAME = 'boilerplate/Home/CHANGE_USERNAME';
export const GET_MUSIC = 'boilerplate/Home/GET_MUSIC';
export const GET_MUSIC_SUCCEEDED = 'boilerplate/Home/GET_MUSIC_SUCCEEDED';
export const UPDATE_GAME_STATE = 'boilerplate/Home/UPDATE_GAME_STATE';
export const SET_AUDIO_CHANGED = 'boilerplate/Home/SET_AUDIO_CHANGED';
