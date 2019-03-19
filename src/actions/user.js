let index = 1;

export const addUser = name => (dispatch, getState) => {
  const { group, global } = getState();
  if (!global.current_group) {
    return Promise.reject('plz select a group.');
  }

  if (!group[global.current_group]) {
    return Promise.reject('group dose not exist.');
  }

  if (typeof group[global.current_group].users === 'undefined') {
    group[global.current_group].users = {};
  }

  group[global.current_group]['users'][index++] = { name };

  dispatch({
    type: 'group/user/add',
    payload: group
  });

  return Promise.resolve();
}

export const delUser = key => (dispatch, getState) => {
  const { group, global } = getState();

  const users = group[global.current_group].users;
  if (typeof users[key] === 'undefined')
    return Promise.reject();

  delete users[key];
  dispatch({
    type: 'group/user/delete',
    payload: group
  });

  return Promise.resolve();
}

export const updateUser = (name, key) => (dispatch, getState) => {
  const { group, global } = getState();
  const users = group[global.current_group].users;
  if (typeof users[key] === 'undefined')
    return Promise.reject();

  users[key].name = name;
  dispatch({
    type: 'group/user/update',
    payload: group
  });

  return Promise.resolve();
}
