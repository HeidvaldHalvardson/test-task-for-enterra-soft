import React, {useState} from 'react';
import styles from './PlayerInfo.module.less'
import profileImage from '../../assets/avatar.jpg'
import {ReactComponent as Visible} from "../../assets/icons/visible.svg";
import {ReactComponent as Unvisible} from "../../assets/icons/unvisible.svg";
import {ReactComponent as Star} from "../../assets/star.svg";


const PlayerInfo = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div className={styles.info}>
      <div className={styles.player}>
        <p className={styles.name}>LongUserName</p>
        <div className={styles.stars}>
          <Star />
          <Star />
          <Star />
          <Star />
          <Star />
        </div>
      </div>
      <img className={styles.avatar} src={profileImage} alt="Avatar."/>
      <div className={`${styles.balance} ${visible ? styles.green : ''}`} onClick={() => setVisible(!visible)}>
        <div className={styles.icon}>
          {visible ? <Visible/> : <Unvisible/>}
        </div>
        <div>
          {visible ? (
            <span className={`${styles.show} ${visible ? '' : styles.hidden}`}>Show balance</span>
          ) : (
            <span className={`${styles.count} ${visible ? styles.hidden : ''}`}>
            $100,500.00
          </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default PlayerInfo;