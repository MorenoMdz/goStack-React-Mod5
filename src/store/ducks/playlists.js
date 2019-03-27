export const Types = {
  GET_REQUEST: 'playlist/GET_REQUEST',
  GET_SUCCESS: 'playlist/GET_SUCCESS',
};

const INITIAL_STATE = {
  data: [],
  loading: false,
};

// this will be loaded into the combineReducers @ './store/index.js'
export default function playlists(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_REQUEST:
      return { ...state, loading: true };
    case Types.GET_SUCCESS:
      return { ...state, loading: false, data: action.payload.data };
    default:
      return state;
  }
}

export const Creators = {
  // action to send the request to saga
  getPlaylistsRequest: () => ({ type: Types.GET_REQUEST }),

  // action to send the request forward from saga to redux
  getPlaylistsSuccess: data => ({
    type: Types.GET_SUCCESS,
    payload: { data },
  }),
};
