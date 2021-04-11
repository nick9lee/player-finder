import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';

import NavIcon from '../../components/UI/Navigation/NavIcon/NavIcon';
import NavItems from '../../components/UI/Navigation/NavItems/NavItems';
import * as actions from '../../store/actions/auth';

class Navigation extends Component {
  state = {
    isOpen: false,
    navItems: [
      {
        name: 'Posts',
        to: '/posts'
      },
      {
        name: 'Login/Signup',
        to: '/login'
      }
    ]
  }

  clickHandler = () => {
    this.setState(prevState => {
      return {
        isOpen: !prevState.isOpen
      }
    });
  };

  logoutHandler = () => {
    this.props.logout();
    this.clickHandler();
  }

  componentDidUpdate(prevProps) {
    this.getNavItems(prevProps.user);
  }

  getNavItems(prevUser) {
    const navItems = [
      {
        name: 'Posts',
        to: '/posts',
        clicked: this.clickHandler
      }
    ];
    if (prevUser) {
      if (!this.props.user) {
        navItems.push({
          name: 'Login/Signup',
          to: '/login',
          clicked: this.clickHandler
        });
        this.setState({navItems: navItems});
        return;
      }
    } else {
      if (this.props.user) {
        navItems.push({
          name: 'Chats',
          to: '/chats',
          clicked: this.clickHandler
        });
        navItems.push({
          name: 'Make a Post',
          to: '/posts',
          clicked: this.clickHandler
        });
        navItems.push({
          name: `${this.props.user.Fname} ${this.props.user.Lname}`,
          to: '/user',
          clicked: this.clickHandler
        });
        navItems.push({
          name: 'Logout',
          to: '/login',
          clicked: this.logoutHandler
        });
        this.setState({navItems: navItems});
        return;
      }
    }
  }

  render() {
    return (
      <Fragment>
        <NavIcon active={this.state.isOpen} clicked={this.clickHandler} />
        <NavItems show={this.state.isOpen ? true : false} items={this.state.navItems} clicked={this.clickHandler} user={this.props.user} />
      </Fragment>
    );
  };
}

const mapStateToProps = state => {
  return {
    user: state.auth.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(actions.logout())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);