import React from 'react';
import './Button.scss';

const Button = ({ children, className, bordered = false, ...props }) => (
  <a
    href="#"
    {...props}
    className={`${bordered ? 'button bordered' : 'button'} ${className}`}
  >
    {children}
  </a>
);

export default Button;
