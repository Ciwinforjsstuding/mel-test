import React from 'react';

import './button.css';

const Button = ({
  children,
  clickHandler,
  customCssBtn,
  disable,
}) => {
  return (
    <button
      disabled={disable}
      onClick={clickHandler}
      className={`btn ${customCssBtn}`}>
      {children}
    </button>
  );
};

export default Button;
