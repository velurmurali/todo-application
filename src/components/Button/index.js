import React from 'react';

const Button = ({ id, children, ...rest }) => {
  return (
    <button id={`btn-${id}`} {...rest}>
      {children}
    </button>
  );
};

export { Button };
