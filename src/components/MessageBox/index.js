import React, { Component } from 'react';
import { InputGroup, Button, Input } from 'reactstrap';
import Styles from './index.module.scss';

class MessageBox extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <div className={Styles.content}></div>
        <InputGroup>
          <Input className={Styles.input} />
          <Button type="primary">Send</Button>
        </InputGroup>
      </div>
    );
  }
}

export default MessageBox;

