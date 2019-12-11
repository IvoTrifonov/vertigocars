import React, { useContext } from 'react';
import styles from './userInfoStyles.module.css';
import { AuthContext } from '../../contextWrapper';

const UserInfo = () => {
  const { username } = useContext(AuthContext);

  return (
    <div className={styles.wrapper}>
      <p>Hello, {username}! This is your profile page. Here you can manage your data.</p>
    </div>
  )
}

export default UserInfo;