import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import ProfileDetail from '../../components/Profiles/ProfileDetail/ProfileDetail';

class Profiles extends Component {
  render() {
    return (
      <Fragment>
        {
          this.props.user ?
          <ProfileDetail user={this.props.user} /> : <Redirect to='/login' />
        }
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.auth.user
  };
};

export default connect(mapStateToProps)(Profiles);