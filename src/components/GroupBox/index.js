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
import Styles from './index.module.scss';

class GroupBox extends Component {
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

  async handleDelete (name) {
    try {
      await this.props.delGroup(name);
    } catch (e) {
      window.alert('delete group fail');
    }
  }

  handleAddGroup = async () => {
    try {
      if (this.state.name !== '') {
        if (!this.state.prev) {
          await this.props.addGroup(this.state.name);
        } else {
          await this.props.updateGroup(this.state.name, this.state.prev);
          this.setState({ prev: '' });
        }
      }

      this.toggle();
    } catch (e) {
      window.alert('add group fail');
    }
  }

  render() {
    const { data } = this.props;
    return (
      <aside className={this.props.className}>
        <ul className={Styles.list}>
          {Object.keys(data).map((key, index) => (
            <li className={Styles.item} key={index} onClick={this.handleSetCurrent.bind(this, key)}>
              <div className={Styles.name}>{data[key].name}</div>
              <Button color="link" onClick={this.handleEdit.bind(this, key)}>Edit</Button>
              <Button color="link" onClick={this.handleDelete.bind(this, key)}>Delete</Button>
            </li>
          ))}
        </ul>
        <Button block onClick={this.toggle}>Add Group</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} onClosed={this.close}>
          <ModalHeader toggle={this.toggle}>Edit Group</ModalHeader>
          <ModalBody>
            <FormGroup>
              <Label>Group Name</Label>
              <Input value={this.state.name} onChange={this.handleChange} />
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.handleAddGroup}>Done</Button>
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </aside>
    );
  }
}

export default GroupBox;
