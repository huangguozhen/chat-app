import React, { Component } from 'react';
import { Button } from 'reactstrap';
import Styles from './index.module.scss';

class UserBox extends Component {
  render() {
    return (
      <aside className={this.props.className}>
        <ul className={Styles.list}>
          <div className={Styles.item}>
            <span>User1</span>
          </div>
        </ul>
        <Button block >Add User</Button>
      </aside>
    );
  }
}

export default UserBox;

