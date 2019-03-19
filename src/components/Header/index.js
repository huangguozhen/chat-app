import React, { Component } from 'react';
import Styles from './index.module.scss';

class Header extends Component {
  render() {
    return (
      <header className={Styles.header}>
        <span>ChatRoom</span>
      </header>
    );
  }
}

export default Header;

