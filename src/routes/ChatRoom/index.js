import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../../components/Header';
import GroupBox from '../../components/GroupBox';
import UserBox from '../../components/UserBox';
import MessageBox from '../../components/MessageBox';
import Styles from './index.module.scss';
import {
  addGroup,
  delGroup,
  updateGroup
} from '../../actions/group';
import {
  setCurrentGroup,
  setCurrentUser
} from '../../actions/global';
import {
  addUser,
  delUser,
  updateUser
} from '../../actions/user';
import { send } from  '../../actions/message';

class ChatRoom extends Component {
  render() {
    const { global, group } = this.props;
    let users = {};
    if (global.current_group && group[global.current_group].users) {
      users = group[global.current_group].users;
    }

    let messages = [];
    if (global.current_group && group[global.current_group].messages) {
      messages = group[global.current_group].messages;
    }

    return (
      <div className={Styles.chatroom}>
        <Header />
        <div className={Styles.container}>
          <GroupBox
            className={Styles.left}
            data={this.props.group}
            current={this.props.global.current_group}
            addGroup={this.props.addGroup}
            delGroup={this.props.delGroup}
            updateGroup={this.props.updateGroup}
            setCurrent={this.props.setCurrentGroup}
          />
          <MessageBox
            className={Styles.main}
            data={messages}
            send={this.props.send}
            current_user={this.props.global.current_user}
          />
          <UserBox
            className={Styles.right}
            data={users}
            current={this.props.global.current_user}
            addUser={this.props.addUser}
            delUser={this.props.delUser}
            updateUser={this.props.updateUser}
            setCurrent={this.props.setCurrentUser}
          />
        </div>
        <footer className={Styles.footer}></footer>
      </div>
    );
  }
}

const select = state => ({
  'global': state['global'],
  group: state.group
});

export default connect(select, {
  addUser,
  delUser,
  updateUser,
  setCurrentUser,
  addGroup,
  delGroup,
  updateGroup,
  setCurrentGroup,
  send
})(ChatRoom);

