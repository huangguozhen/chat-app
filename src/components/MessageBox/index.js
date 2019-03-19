import React, { Component } from 'react';
import { InputGroup, Button, Input } from 'reactstrap';
import cls from 'classname';
import Styles from './index.module.scss';

/* eslint eqeqeq: 0 */
class MessageBox extends Component {
  static defaultProps = {
    data: [],
    current_user: ''
  };

  constructor (props) {
    super(props);
    this.state = { message: '' };
  }

  handleChange = (evt) => {
    this.setState({
      message: evt.target.value
    });
  }

  handleSend = async () => {
    try {
      await this.props.send(this.state.message);
      this.setState({ message: '' });
    } catch (e) {
      window.alert(e);
    }
  }

  render() {
    const { data, current_user } = this.props;

    return (
      <div className={this.props.className}>
        <div className={Styles.content}>
          {data.map((item, index) => (
            <div
              key={index}
              className={cls({
                [Styles.item]: true,
                [Styles.reverse]: current_user == item.userkey
              })}
            >
              <span>{item.username}</span>{':'}
              <span>{item.content}</span>
            </div>
          ))}
        </div>
        <InputGroup>
          <Input
            className={Styles.input}
            value={this.state.message}
            onChange={this.handleChange}
          />
          <Button type="primary" onClick={this.handleSend}>Send</Button>
        </InputGroup>
      </div>
    );
  }
}

export default MessageBox;

