import React from 'react';
import { Button } from './Styles.js';

const CustomButton = ({ children, ...props }) => {
  return (
    <Button {...props}>
      {children}
    </Button>
  );
};

export default CustomButton;
