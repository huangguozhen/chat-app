import React, { Component } from 'react';
import {
  Button,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from 'reactstrap';
import cls from 'classname';
import Styles from './index.module.scss';

/* eslint eqeqeq: 0 */
class UserBox extends Component {
  static defaultProps = {
    data: {}
  }

  constructor (props) {
    super(props);
    this.state = {
      modal: false,
      name: ''
    };
  }

  toggle = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  close = () => {
    this.setState({ name: '' });
  }

  handleChange = (evt) => {
    this.setState({
      name: evt.target.value
    });
  }

  handleSetCurrent (key) {
    this.props.setCurrent(key);
  }

  handleEdit (key) {
    this.setState({ prev: key, name: this.props.data[key].name });
    this.toggle();
  }

  async handleDelete (key) {
    try {
      await this.props.delUser(key);
    } catch (e) {
      window.alert('delete user fail');
    }
  }

  handleAddUser = async () => {
    try {
      if (this.state.name !== '') {
        if (!this.state.prev) {
          await this.props.addUser(this.state.name);
        } else {
          await this.props.updateUser(this.state.name, this.state.prev);
          this.setState({ prev: '' });
        }
      }

      this.toggle();
    } catch (e) {
      window.alert('add user fail');
    }

  }

  render() {
    const { data, current } = this.props;

    return (
      <aside className={this.props.className}>
        <ul className={Styles.list}>
          {Object.keys(data).map((key, index) => (
            <li
              className={cls({ [Styles.item]: true, [Styles.active]: key == current })}
              key={index}
              onClick={this.handleSetCurrent.bind(this, key)}
            >
              <div className={Styles.name}>{data[key].name}</div>
              <Button color="link" onClick={this.handleEdit.bind(this, key)}>Edit</Button>
              <Button color="link" onClick={this.handleDelete.bind(this, key)}>Delete</Button>
            </li>
          ))}
        </ul>
        <Button block onClick={this.toggle}>Add User</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} onClosed={this.close}>
          <ModalHeader toggle={this.toggle}>Edit User</ModalHeader>
          <ModalBody>
            <FormGroup>
              <Label>User Name</Label>
              <Input value={this.state.name} onChange={this.handleChange} />
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.handleAddUser}>Done</Button>
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </aside>
    );
  }
}

export default UserBox;

