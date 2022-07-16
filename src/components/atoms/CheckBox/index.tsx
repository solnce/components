type Type = {
  name: string;
  id?: string;
  className?: string;
  onChange?: () => void;
  checked?: boolean;
};

export const CheckBox: React.FC<Type> = ({
  name,
  id,
  className,
  onChange,
  checked,
}) => (
  <input
    id={id}
    name={name}
    className={className}
    type="checkbox"
    onChange={onChange}
    defaultChecked={checked}
  />
);
