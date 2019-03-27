import { all, takeLatest } from 'redux-saga/effects';

import { Types as PlaylistsTypes } from '../ducks/playlists';
import { Types as PlaylistDetailsTypes } from '../ducks/playlistDetails';

import { getPlaylists } from './playlists';
import { getPlaylistDetails } from './playlistDetails';

// every time the GET_REQUEST type is called, run the getPlaylists action
export default function* rootSaga() {
  yield all([
    takeLatest(PlaylistsTypes.GET_REQUEST, getPlaylists),
    takeLatest(PlaylistDetailsTypes.GET_REQUEST, getPlaylistDetails),
  ]);
}
