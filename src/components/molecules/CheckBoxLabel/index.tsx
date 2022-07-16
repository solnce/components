import { css } from '@emotion/react';
import { CheckBox } from '@atoms/CheckBox';
import { Label } from '@atoms/Label';

type Type = {
  inputId: string;
  name: string;
  className?: string;
  children: React.ReactNode;
  checked?: boolean;
  onChange?: () => void;
};

export const CheckBoxLabel: React.FC<Type> = ({
  inputId,
  className,
  name,
  children,
  checked,
  onChange,
}) => (
  <div className={className} css={wrapper}>
    <CheckBox
      name={name}
      id={inputId}
      css={check}
      checked={checked}
      onChange={onChange}
    />
    <Label htmlFor={inputId} css={label}>
      {children}
    </Label>
  </div>
);

const wrapper = css`
  display: inline-flex;
  align-items: center;
  gap: 4px;
`;

const check = css`
  flex: 0 0;
`;

const label = css`
  flex: 1 0;
`;
