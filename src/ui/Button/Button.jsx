import React from 'react';
import styles from './Button.module.less'

const Button = (props) => {
  const {
    isCanceled,
    className,
    ...otherProps
  } = props
  return (
    <button
      className={`${styles.button} ${isCanceled ? styles.canceled : ''} ${className}`}
      {...otherProps}
    >
      {isCanceled ? 'Canceled' : 'Join table' }
    </button>
  );
};

export default Button;