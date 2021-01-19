import React from 'react';
import {InputContent} from './Styles.js';

const Input = ({ label, type, name, value, onChange, error, onBlur }) => {
  return (
    <InputContent>
      <label htmlFor={name} className="label">
        {label}
      </label>
      <input
        id={name}
        name={name}
        className="input"
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {error && <p className="error">{error}</p>}
    </InputContent>
  );
};

export default Input;
