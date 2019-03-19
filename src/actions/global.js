export const setCurrentGroup = key => (dispatch, getState) => {
  const { global } = getState();
  global['current_group'] = key;

  dispatch({
    type: 'global/set_group',
    payload: global
  });
}
