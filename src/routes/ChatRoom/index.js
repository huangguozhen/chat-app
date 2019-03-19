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

class ChatRoom extends Component {
  render() {
    return (
      <div className={Styles.chatroom}>
        <Header />
        <div className={Styles.container}>
          <GroupBox
            className={Styles.left}
            data={this.props.group}
            addGroup={this.props.addGroup}
            delGroup={this.props.delGroup}
            updateGroup={this.props.updateGroup}
          />
          <MessageBox
            className={Styles.main}
          />
          <UserBox className={Styles.right} />
        </div>
        <footer className={Styles.footer}></footer>
      </div>
    );
  }
}

const select = state => ({
  group: state.group
});

export default connect(select, {
  addGroup,
  delGroup,
  updateGroup
})(ChatRoom);

