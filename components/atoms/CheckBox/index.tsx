type Type = {
  className?: string;
  onClick?: () => void;
  checked?: boolean;
};

export const CheckBox: React.FC<Type> = ({ className = '', onClick = () => {}, checked = false }) => (
  <input className={className} type="check" onClick={onClick} defaultChecked={checked} />
);
