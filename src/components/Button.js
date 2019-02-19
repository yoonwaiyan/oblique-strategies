import React from 'react';
import './Button.scss';

const Button = ({ children, bordered = false, ...props }) => (
  <a href="#" {...props} class={bordered ? 'button bordered' : 'button'}>
    {children}
  </a>
);

export default Button;
