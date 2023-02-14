import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const Input = ({ id, label, ...rest }) => {
  return (
    <label>
      <b className="label">{label}:</b>
      <input id={`input-${id}`} {...rest} />
    </label>
  );
};

Input.propTypes = {
  id: PropTypes.string.isRequired,
};

export { Input };
