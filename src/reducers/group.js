export const namespace = 'group';

const initialState = {};

export default function (state = initialState, action) {
  console.log(action.type);
  if (/^group\/\w+/.test(action.type)) {
    return { ...state, ...action.payload };
  }

  return state;
}
