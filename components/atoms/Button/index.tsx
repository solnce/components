import React from 'react';
import { css } from '@emotion/react';

type Type = {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
};

export const Button: React.FC<Type> = ({
  children,
  href,
  onClick,
  ...props
}) => {
  const Tag = href ? 'a' : 'button'
  return (
    <Tag css={button} onClick={onClick} {...props}>
      {children}
    </Tag>
  );
};

const button = css`
  border: none;
  outline: none;
  background-color: red;
  color: #fff;

  &:hover {
    opacity: 0.5;
  }
`;