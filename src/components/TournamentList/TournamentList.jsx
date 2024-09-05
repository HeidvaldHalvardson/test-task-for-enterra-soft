import React from 'react';
import styles from './TournamentList.module.less'
import TournamentItem from "../TournamentItem/TournamentItem";

const TournamentList = ({tournaments}) => {
  return (
    <ul className={styles.list}>
      {tournaments.map((tournament, index) => (
        <TournamentItem key={index} {...tournament} />
      ))}
    </ul>
  );
};

export default TournamentList;