import React from 'react';

type Type = {
  onClick?: () => void;
};

export const CheckBox: React.FC<Type> = ({
  onClick,
  ...props
}) => (
  <input type="check" onClick={onClick} {...props} />
);