import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

import { Creators as PlaylistDetailsActions } from '../ducks/playlistDetails';

export function* getPlaylistDetails(action) {
  try {
    const response = yield call(api.get, `/playlists/${action.payload.id}?_embed=songs`);

    console.tron.log(`API get >> ${response}`);

    yield put(PlaylistDetailsActions.getPlaylistDetailsSuccess(response.data));
  } catch (error) {
    console.tron.log(error);
  }
}