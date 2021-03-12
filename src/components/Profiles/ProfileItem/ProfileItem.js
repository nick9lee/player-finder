import React, {Fragment} from 'react';

import styles from './ProfileItem.module.css';
import ProfilePic from '../ProfilePic/ProfilePic';
import PillBadge from '../../UI/PillBadge/PillBadge';

const profileItem = props => {
  return (
    <Fragment>
      <h1>Profiles</h1>
      <div className={styles.ProfileItem}>
        <div className={styles.ProfilePic}>
          <ProfilePic size="Medium"/>
        </div>
        <div className={styles.ProfileDetail}>
          <h2 className={styles.Name}>Name <span className={styles.Since}>Since Yesterday</span></h2>
          <p className={styles.Description}>This is a brief description of the person This is a brief</p>
          <span className={styles.SportsPlayed}>Sports he plays:</span>
          <ul className={styles.SportsList}>
            <li className={styles.SportsItem}><PillBadge type="Orange">Badminton</PillBadge></li>
            <li className={styles.SportsItem}><PillBadge type="Orange">Badminton</PillBadge></li>
            <li className={styles.SportsItem}><PillBadge type="Orange">Badminton</PillBadge></li>
          </ul>
        </div>
      </div>
      <div className={styles.ProfileItem}>
        <div className={styles.ProfilePic}>
          <ProfilePic size="Medium"/>
        </div>
        <div className={styles.ProfileDetail}>
          <h2 className={styles.Name}>Name <span className={styles.Since}>Since Yesterday</span></h2>
          <p className={styles.Description}>This is a brief description of the person This is a brief</p>
          <span className={styles.SportsPlayed}>Sports he plays:</span>
          <ul className={styles.SportsList}>
            <li className={styles.SportsItem}><PillBadge type="Orange">Badminton</PillBadge></li>
            <li className={styles.SportsItem}><PillBadge type="Orange">Badminton</PillBadge></li>
            <li className={styles.SportsItem}><PillBadge type="Orange">Badminton</PillBadge></li>
          </ul>
        </div>
      </div>
    </Fragment>
  );
};

export default profileItem;