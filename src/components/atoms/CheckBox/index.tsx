type Type = {
  name: string;
  className?: string;
  onClick?: () => void;
  checked?: boolean;
};

export const CheckBox: React.FC<Type> = ({ name, className, onClick, checked }) => (
  <input name={name} className={className} type="checkbox" onClick={onClick} defaultChecked={checked} />
);
