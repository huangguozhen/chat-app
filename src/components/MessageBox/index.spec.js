import React from 'react';
import { shallow } from 'enzyme';
import cls from 'classname';
import MessageBox from './index';
import Styles from './index.module.scss';

it('verify that message is added to the chatroom', () => {
  const messages = [{
    userkey: '1',
    content: 'test message',
    username: 'User1'
  }, {
    userkey: '2',
    content: 'test message 2',
    username: 'User2'
  }];
  const current_user = '1';

  const wrapper = shallow(<MessageBox
    current_user={current_user}
    data={messages}
  />);

  const msglist = (<div className={Styles.content}>
    {messages.map((item, index) => (
      <div
        key={index}
        className={cls({
          [Styles.item]: true,
          [Styles.reverse]: current_user === item.userkey
        })}
      >
        <span>{item.username}</span>{':'}
        <span>{item.content}</span>
      </div>
    ))}
  </div>);

  expect(wrapper).toContainReact(msglist);
});
