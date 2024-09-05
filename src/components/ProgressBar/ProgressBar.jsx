import React, {useEffect, useRef, useState} from 'react';
import styles from './ProgressBar.module.less';

const ProgressBar = () => {
  const [progress, setProgress] = useState(70);
  const [inputValue, setInputValue] = useState(70);
  const timerRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus()
  }, []);

  const onChangeHandler = (e) => {
    let value = e.target.value;

  if (value < 0) {
      value = 0;
    } else if (value > 100) {
      value = 100;
    }

    setInputValue(value);

    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = setTimeout(() => {
      setProgress(value);
      clearTimeout(timerRef.current);
    }, 500);
  }
  return (
    <div>
      <div className={styles.progressbar}>
        <div className={styles.progressline} style={{width: `${progress}%`}}></div>
      </div>
      <span className={styles.loading}>
        Loading
        <input
          className={styles.input}
          type="number"
          min="0"
          max="100"
          value={inputValue}
          onChange={onChangeHandler}
          ref={inputRef}
        />
        %
      </span>
    </div>
  );
};

export default ProgressBar;