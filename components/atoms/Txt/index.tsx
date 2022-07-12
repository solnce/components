import { css } from '@emotion/react';

type Type = {
  className?: string;
  children: React.ReactNode;
};

export const Txt: React.FC<Type> = ({ className, children }) => (
  <p className={className} css={text}>
    {children}
  </p>
);

const text = css`
  color: #333;
  line-height: 1.6;
  font-size: 16px;
`;
