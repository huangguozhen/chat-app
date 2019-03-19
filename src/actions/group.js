let index = 1;

export const addGroup = name => (dispatch, getState) => {
  const { group } = getState();

  group[index++] = { name };
  dispatch({
    type: 'group/add',
    payload: group
  });

  return Promise.resolve();
}

export const delGroup = key => (dispatch, getState) => {
  const { group } = getState();
  if (typeof group[key] === 'undefined')
    return Promise.reject();

  delete group[key];
  dispatch({
    type: 'group/delete',
    payload: group
  });

  return Promise.resolve();
}

export const updateGroup = (name, key) => (dispatch, getState) => {
  const { group } = getState();

  group[key].name =  name;
  dispatch({
    type: 'group/update',
    payload: group
  });

  return Promise.resolve();
}
