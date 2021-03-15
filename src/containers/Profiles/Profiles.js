import React, {Component} from 'react';

import styles from './Profiles.module.css';
import ProfileItem from '../../components/Profiles/ProfileItem/ProfileItem';
import ProfileDetail from '../../components/Profiles/ProfileDetail/ProfileDetail';

class Profiles extends Component {
  render() {
    return (
      // <ProfileItem />
      <ProfileDetail />
    );
  }
}

export default Profiles;