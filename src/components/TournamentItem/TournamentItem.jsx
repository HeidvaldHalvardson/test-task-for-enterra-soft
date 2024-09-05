import React, {useState} from 'react';
import styles from './TournamentItem.module.less';
import Button from "../../ui/Button/Button";
import {ReactComponent as Pin} from '../../assets/icons/pin.svg'
import {ReactComponent as Time} from '../../assets/icons/time.svg'
import {ReactComponent as Players} from '../../assets/icons/players.svg'
import {ReactComponent as Cup} from '../../assets/icons/tourney.svg'
import Tags from "../../ui/Tags/Tags";

const TournamentItem = (props) => {
  const {
    cancel,
    tags,
    title,
    isSelected,
    date,
    reward,
    players,
  } = props

  const [isItemSelected, setIsItemSelected] = useState(isSelected);

  const onItemHandler = () => {
    setIsItemSelected(!isItemSelected)
  }

  const onButtonClick = (e) => {
    e.stopPropagation();
  }

  return (
    <li
      className={`${styles.item} ${isItemSelected && !cancel ? styles.selected : ''}`}
      onClick={onItemHandler}
    >
      <div className={`${styles.label} ${cancel ? styles.canceled : ''}`}>
        {cancel ? 'Canceled' : 'Registering'}
      </div>
      <div className={styles['item-wrapper']}>

        <div className={styles.header}>
          <div className={styles.inner}>
            <div className={styles['inner-top']}>
              {isItemSelected ? <Pin/> : null}
              <Tags tags={tags} />
            </div>
            <p className={styles.title}>{title}</p>
          </div>
          <Button onClick={onButtonClick} isCanceled={cancel}/>
        </div>

        <div className={styles.footer}>
          <div>
            <Time />
            <span>{date}</span>
          </div>
          <div>
            <Players />
            <span>{players.count}/{players.all}</span>
          </div>
          <div>
            <Cup />
            <span>{reward}</span>
          </div>
        </div>

      </div>
    </li>
  );
};

export default TournamentItem;