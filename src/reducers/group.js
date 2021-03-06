export const namespace = 'group';

const initialState = {};

export default function (state = initialState, action) {
  if (/^group\/\w+/.test(action.type)) {
    return { ...state, ...action.payload };
  }

  return state;
}
