import React, {Component, Fragment} from 'react';

import NavIcon from '../../components/UI/Navigation/NavIcon/NavIcon';
import NavItems from '../../components/UI/Navigation/NavItems/NavItems';

class Navigation extends Component {
  state = {
    isOpen: false,
    navItems: [
      'Home',
      'Posts',
      'Chats',
      'Login'
    ]
  }

  clickHandler = () => {
    this.setState(prevState => {
      return {
        isOpen: !prevState.isOpen
      }
    });
  };

  render() {
    return (
      <Fragment>
        <NavIcon active={this.state.isOpen} clicked={this.clickHandler} />
        <NavItems show={this.state.isOpen ? true : false} items={this.state.navItems} clicked={this.clickHandler} />
      </Fragment>
    );
  };
}

export default Navigation;