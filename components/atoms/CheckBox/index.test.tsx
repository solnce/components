import { render } from '@testing-library/react';
import { CheckBox } from '@atoms/CheckBox';

describe('<CheckBox />', () => {
  describe('prop: className', () => {
    test('should have className', () => {
      const { container } = render(<CheckBox className="test" />);

      expect(container.querySelector('input[type=check]')).toHaveClass('test');
    });
  });

  describe('prop: checked', () => {
    test('should render checked checkbox', () => {
      const { container } = render(<CheckBox checked />);

      expect(container.querySelector("input[type=check]")).toHaveAttribute('checked');
    });

    test('should render unchecked checkbox', () => {
      const { container } = render(<CheckBox />);

      expect(container.querySelector("input[type=check]")).not.toHaveAttribute('checked');
    });
  });
});
