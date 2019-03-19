import React, { Component } from 'react';
import { Button } from 'reactstrap';
import Styles from './index.module.scss';

class GroupBox extends Component {
  render() {
    return (
      <aside className={this.props.className}>
        <ul className={Styles.list}>
          <div className={Styles.item}>
            <span>Group1</span>
          </div>
        </ul>
        <Button block >Add Group</Button>
      </aside>
    );
  }
}

export default GroupBox;
