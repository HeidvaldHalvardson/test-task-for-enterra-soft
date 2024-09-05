import React from 'react';
import styles from './Tags.module.less'
import {ReactComponent as Time} from '../../assets/icons/tags-icon/Time.svg'
import {ReactComponent as FreeRoll} from '../../assets/icons/tags-icon/FreeRoll.svg'
import {ReactComponent as Rapid} from '../../assets/icons/tags-icon/Rapid.svg'
import {ReactComponent as Bounty} from '../../assets/icons/tags-icon/Bounty.svg'
import {ReactComponent as ProBounty} from '../../assets/icons/tags-icon/ProBounty.svg'
import {ReactComponent as Knockout} from '../../assets/icons/tags-icon/Knockout.svg'

const Tags = ({tags}) => {
  const tagsIcons = {
    Knockout: <Knockout />,
    Bounty: <Bounty />,
    ProBounty: <ProBounty />,
    FreeRoll: <FreeRoll />,
    Rapid: <Rapid />,
    Time: <Time />
  }



  return (
    <ul className={styles.tags}>
      {
        tags.map((tag) => {
          return (
            <li key={tag} className={`${tagsIcons[tag] ? '' : styles.tag}`}>
              {tagsIcons[tag] ?? tag}
            </li>
          )
        })
      }
    </ul>
  );
};

export default Tags;