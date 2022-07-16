import { render, screen, fireEvent } from '@testing-library/react';
import { CheckBoxLabel } from '@molecules/CheckBoxLabel';

describe('<CheckBoxLabel />', () => {
  describe('prop: inputId', () => {
    test('should have id at input', () => {
      const { container } = render(
        <CheckBoxLabel inputId="check" name="check">
          text
        </CheckBoxLabel>
      );

      const checkbox = screen.getByRole('checkbox');

      expect(container.querySelector('#check')).toBe(checkbox);
    });
  });

  describe('prop: className', () => {
    test('should have className at wrapper div', () => {
      const { container } = render(
        <CheckBoxLabel className="test" inputId="check" name="check">
          text
        </CheckBoxLabel>
      );

      expect(container.querySelector('.test')).toBeInTheDocument();
      expect(container.querySelector('.test')).toContainElement(
        screen.getByRole('checkbox')
      );
      expect(container.querySelector('.test')).toContainElement(
        screen.getByLabelText('text')
      );
    });
  });

  describe('prop: children', () => {
    test('should render children text', () => {
      const children = 'child';
      const { container } = render(
        <CheckBoxLabel inputId="check" name="check">
          {children}
        </CheckBoxLabel>
      );

      expect(container.querySelector('label')).toHaveTextContent('child');
    });

    test('should render children, ', () => {
      const children = <span data-testid="child" />;
      const { container } = render(
        <CheckBoxLabel inputId="check" name="check">
          {children}
        </CheckBoxLabel>
      );

      expect(container.querySelector('label')).toContainElement(
        screen.getByTestId('child')
      );
    });
  });

  describe('prop: checked', () => {
    test('should render checked checkbox', () => {
      render(
        <CheckBoxLabel checked inputId="check" name="checkbox">
          text
        </CheckBoxLabel>
      );

      expect(screen.getByRole('checkbox')).toBeChecked();
    });

    test('should render unchecked checkbox', () => {
      render(
        <CheckBoxLabel inputId="check" name="checkbox">
          text
        </CheckBoxLabel>
      );

      expect(screen.getByRole('checkbox')).not.toBeChecked();
    });

    test('should toggle checked checkbox with label click', () => {
      render(
        <CheckBoxLabel name="checkbox" inputId="checkbox">
          label
        </CheckBoxLabel>
      );
      const checkBox = screen.getByRole('checkbox');
      const label = screen.getByLabelText('label');

      expect(checkBox).not.toBeChecked();

      fireEvent.click(label);

      expect(checkBox).toBeChecked();
    });

    test('should toggle checked checkbox with input click', () => {
      render(
        <CheckBoxLabel name="checkbox" inputId="checkbox">
          label
        </CheckBoxLabel>
      );
      const checkBox = screen.getByRole('checkbox');

      expect(checkBox).not.toBeChecked();

      fireEvent.click(checkBox);

      expect(checkBox).toBeChecked();
    });
  });

  describe('prop: onChange', () => {
    test('should fire event from checkbox', () => {
      const onChange = jest.fn();
      render(
        <CheckBoxLabel name="checkbox" inputId="checkbox" onChange={onChange}>
          label
        </CheckBoxLabel>
      );
      fireEvent.click(screen.getByRole('checkbox'));

      expect(onChange).toHaveBeenCalled();
    });

    test('should fire event from label', () => {
      const onChange = jest.fn();
      render(
        <CheckBoxLabel name="checkbox" inputId="checkbox" onChange={onChange}>
          label
        </CheckBoxLabel>
      );
      fireEvent.click(screen.getByLabelText('label'));

      expect(onChange).toHaveBeenCalled();
    });
  });
});
