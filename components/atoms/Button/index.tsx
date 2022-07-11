import React from 'react';

type Type = {
  children: React.ReactNode;
  onClick?: () => void;
};

export const Button: React.FC<Type> = ({
  children,
  onClick = () => {},
  ...props
}) => (
  <a {...props}>
    {children}
  </a>
);