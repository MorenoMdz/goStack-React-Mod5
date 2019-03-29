export const Types = {
  SET: 'error/SET',
  HIDE: 'error/HIDE',
};

const INITIAL_STATE = {
  visible: false,
  message: null,
};

// this will be loaded into the combineReducers @ './store/index.js'
export default function error(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SET:
      return { visible: true, message: action.payload.message };
    case Types.HIDE:
      return { visible: false };
    default:
      return state;
  }
}

export const Creators = {
  // action to send the request to saga
  setError: message => ({ type: Types.SET, payload: { message } }),

  // action to send the request forward from saga to redux
  hideError: () => ({ type: Types.HIDE }),
};
