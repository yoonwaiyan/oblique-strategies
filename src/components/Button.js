import React from 'react';
import './Button.scss';

const Button = ({
  children,
  className,
  disabled = false,
  bordered = false,
  ...props
}) => {
  if (disabled) {
    return <span className={`button disabled ${className}`}>{children}</span>;
  }

  return (
    <a
      href="#"
      {...props}
      className={`${bordered ? 'button bordered' : 'button'} ${className}`}
    >
      {children}
    </a>
  );
};

export default Button;
