import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';


function Button({ children, isHeader, onButtonClick }) {
  const buttonClass = (isHeader === 'true') ? 'button-header' : 'button';
  return (
    <button className={buttonClass} onClick={onButtonClick} aria-label="contact Al-khamayseh Beverage Company ">
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.any.isRequired,
  isHeader: PropTypes.string.isRequired,
  onButtonClick: PropTypes.func.isRequired,
};

export default Button;
