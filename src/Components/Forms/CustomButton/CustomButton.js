import React from 'react';
import styles from './CustomButton.module.css';

const CustomButton = ({ children, ...props }) => {
  return (
    <button {...props} className={styles.button}>
      {children}
    </button>
  );
};

export default CustomButton;
