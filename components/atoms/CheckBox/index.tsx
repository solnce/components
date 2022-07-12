type Type = {
  onClick?: () => void;
};

export const CheckBox: React.FC<Type> = ({ onClick }) => <input type="check" onClick={onClick} />;
