import { css } from '@emotion/react';

type Type = {
  className?: string;
  children: React.ReactNode;
  htmlFor: string;
};

export const Label: React.FC<Type> = ({ className, children, htmlFor }) => (
  <label htmlFor={htmlFor} className={className} css={label}>
    {children}
  </label>
);

const label = css`
  color: #333;
  line-height: 1.6;
  font-size: 16px;
`;
