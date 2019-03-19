export const setCurrentGroup = key => (dispatch, getState) => {
  const { global } = getState();
  global['current_group'] = key;

  dispatch({
    type: 'global/set_group',
    payload: global
  });
}

export const setCurrentUser = key => (dispatch, getState) => {
  const { global } = getState();
  global['current_user'] = key;

  dispatch({
    type: 'global/set_user',
    payload: global
  });
}
