export const send = message => (dispatch, getState) => {
  const { group, global } = getState();
  if (!global.current_group) {
    return Promise.reject('plz select a group.');
  }

  if (!group[global.current_group]) {
    return Promise.reject('group dose not exist.');
  }

  if (!global.current_user) {
    return Promise.reject('plz select a user as owner.');
  }

  const users = group[global.current_group].users || {};

  if (typeof users[global.current_user] === 'undefined') {
    return Promise.reject('user dose not exist.');
  }

  const data = {
    userkey: global.current_user,
    username: users[global.current_user].name,
    content: message
  }

  const messages = group[global.current_group].messages || [];
  messages.unshift(data);

  group[global.current_group].messages = messages;
  dispatch({
    type: 'group/message/send',
    payload: group
  });

  return Promise.resolve();
}
