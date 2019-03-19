export const namespace = 'global';

const initialState = {};

export default function (state = initialState, action) {
  if (/^global\/\w+/.test(action.type)) {
    return { ...state, ...action.payload };
  }

  return state;
}
