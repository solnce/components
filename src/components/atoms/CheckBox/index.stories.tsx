import { CheckBox } from '.';

export default {
  title: 'Atoms/CheckBox',
  component: CheckBox,
};

export const Basic = () => <CheckBox name="checkbox" />;
export const Checked = () => <CheckBox name="checkbox" checked />;
