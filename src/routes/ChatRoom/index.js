import React, { Component } from 'react';
import Header from '../../components/Header';
import GroupBox from '../../components/GroupBox';
import UserBox from '../../components/UserBox';
import MessageBox from '../../components/MessageBox';
import Styles from './index.module.scss';

class ChatRoom extends Component {
  render() {
    return (
      <div className={Styles.chatroom}>
        <Header />
        <div className={Styles.container}>
          <GroupBox className={Styles.left} />
          <MessageBox className={Styles.main}/>
          <UserBox className={Styles.right} />
        </div>
      </div>
    );
  }
}

export default ChatRoom;

