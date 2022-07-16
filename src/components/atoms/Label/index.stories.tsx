import { Label } from '@atoms/Label';
import { CheckBox } from '@atoms/CheckBox';

export default {
  title: 'Atoms/Label',
  component: Label,
};

export const Basic = () => <Label htmlFor="label">label</Label>;
export const WithCheckBox = () => (
  <div>
    <CheckBox name="checkbox" id="checkbox" />
    <Label htmlFor="checkbox">label</Label>
  </div>
);
