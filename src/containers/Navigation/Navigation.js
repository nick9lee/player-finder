import React, {Component} from 'react';

import styles from './Navigation.module.css';
import NavIcon from '../../components/UI/Navigation/NavIcon/NavIcon';
import NavItems from '../../components/UI/Navigation/NavItems/NavItems';

class Navigation extends Component {
  render() {
    return (
      <div>
        <NavIcon />
        {/* <NavItems /> */}
      </div>
    );
  }
}

export default Navigation;