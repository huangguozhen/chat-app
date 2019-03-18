import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Form,
  Input,
  FormGroup,
  Label,
  Button
} from 'reactstrap';
import Styles from './index.module.scss';

class Login extends Component {
  state = {
    username: ''
  };

  handleChange = (evt) => {
    this.setState({ username: evt.target.value });
  }

  handleSubmit = (evt) => {
    evt.preventDefault();
  }

  render() {
    return (
      <div className={Styles.container}>
        <div className={Styles.box}>
          <Form onSubmit={this.handleSubmit}>
            <FormGroup>
              <Label>Username</Label>
              <Input
                value={this.state.username}
                onChange={this.handleChange}
                placeholder='plz input your username'
              />
            </FormGroup>
            <Button type='primary' block>Submit</Button>
          </Form>
        </div>
      </div>
    );
  }
}

export default connect()(Login);
