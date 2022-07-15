import { css } from '@emotion/react';
import { colors } from '@styles';

type Type = {
  className?: string;
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
};

export const Button: React.FC<Type> = ({ className = '', children, href = '', onClick = () => {} }) => {
  const Tag = href ? 'a' : 'button';

  return (
    <Tag className={className} href={href} css={button} onClick={onClick}>
      {children}
    </Tag>
  );
};

const button = css`
  border: none;
  outline: none;
  background-color: orange;
  color: ${colors.white};

  &:hover {
    opacity: 0.5;
  }
`;
