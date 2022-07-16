import { CheckBoxLabel } from '@molecules/CheckBoxLabel';

export default {
  title: 'Molecules/CheckBoxLabel',
  component: CheckBoxLabel,
};

export const Basic = () => (
  <CheckBoxLabel inputId="check" name="check">
    label
  </CheckBoxLabel>
);
export const Checked = () => (
  <CheckBoxLabel inputId="check" name="check" checked>
    label
  </CheckBoxLabel>
);
