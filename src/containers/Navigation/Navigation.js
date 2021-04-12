import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';

import NavIcon from '../../components/UI/Navigation/NavIcon/NavIcon';
import NavItems from '../../components/UI/Navigation/NavItems/NavItems';
import * as actions from '../../store/actions/auth';

class Navigation extends Component {
  clickHandler = () => {
    this.setState(prevState => {
      return {
        isOpen: !prevState.isOpen
      }
    });
  };

  state = {
    isOpen: false,
    navItems: [
      {
        name: 'Posts',
        to: '/posts',
        clickHandler: this.clickHandler
      },
      {
        name: 'Login/Signup',
        to: '/login',
        clickHandler: this.clickHandler
      }
    ]
  }

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
        clickHandler: this.clickHandler
      }
    ];
    if (prevUser) {
      if (!this.props.user) {
        navItems.push({
          name: 'Login/Signup',
          to: '/login',
          clickHandler: this.clickHandler
        });
        this.setState({navItems: navItems});
        return;
      }
    } else {
      if (this.props.user) {
        navItems.push({
          name: 'Chats',
          to: '/chats',
          clickHandler: this.clickHandler
        });
        navItems.push({
          name: 'Make a Post',
          to: '/posts/new',
          clickHandler: this.clickHandler
        });
        navItems.push({
          name: `${this.props.user.Fname} ${this.props.user.Lname}`,
          to: '/user',
          clickHandler: this.clickHandler
        });
        navItems.push({
          name: 'Logout',
          to: '/login',
          clickHandler: this.logoutHandler
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
        <NavItems show={this.state.isOpen ? true : false} items={this.state.navItems} user={this.props.user} />
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