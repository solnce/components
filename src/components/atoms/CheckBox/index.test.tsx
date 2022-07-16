import { render, screen, fireEvent } from '@testing-library/react';
import { CheckBox } from '@atoms/CheckBox';

describe('<CheckBox />', () => {
  describe('prop: id', () => {
    test('should have id', () => {
      const { container } = render(<CheckBox id="test" name="checkbox" />);

      expect(container.querySelector('#test')).toBeInTheDocument();
    });
  });

  describe('prop: className', () => {
    test('should have className', () => {
      render(<CheckBox className="test" name="checkbox" />);

      expect(screen.getByRole('checkbox')).toHaveClass('test');
    });
  });

  describe('prop: checked', () => {
    test('should render checked checkbox', () => {
      render(<CheckBox checked name="checkbox" />);

      expect(screen.getByRole('checkbox')).toBeChecked();
    });

    test('should render unchecked checkbox', () => {
      render(<CheckBox name="checkbox" />);

      expect(screen.getByRole('checkbox')).not.toBeChecked();
    });

    test('should toggle checked checkbox', () => {
      render(<CheckBox name="checkbox" />);
      const checkBox = screen.getByRole('checkbox');

      expect(checkBox).not.toBeChecked();

      fireEvent.click(checkBox);

      expect(checkBox).toBeChecked();
    });
  });

  describe('prop: onChange', () => {
    test('should fire event from checkbox', () => {
      const onChange = jest.fn();
      render(<CheckBox name="checkbox" onChange={onChange} />);
      fireEvent.click(screen.getByRole('checkbox'));

      expect(onChange).toHaveBeenCalled();
    });
  });
});
