import { render, screen, fireEvent } from '@testing-library/react';
import { Label } from '@atoms/Label';
import { CheckBox } from '@atoms/CheckBox';

describe('<Label />', () => {
  describe('prop: className', () => {
    test('should have className', () => {
      const { container } = render(
        <Label className="test" htmlFor="label">
          text
        </Label>
      );

      expect(container.querySelector('label')).toHaveClass('test');
    });
  });

  describe('prop: children', () => {
    test('should render children text', () => {
      const children = 'child';
      const { container } = render(<Label htmlFor="label">{children}</Label>);

      expect(container.querySelector('label')).toHaveTextContent('child');
    });

    test('should render children, ', () => {
      const children = <span data-testid="child" />;
      const { container } = render(<Label htmlFor="label">{children}</Label>);

      expect(container.querySelector('label')).toContainElement(
        screen.getByTestId('child')
      );
    });
  });

  describe('prop: checked', () => {
    test('should toggle checked checkbox with label click', () => {
      render(
        <div>
          <CheckBox name="checkbox" id="checkbox" />
          <Label htmlFor="checkbox">label</Label>
        </div>
      );
      const checkBox = screen.getByRole('checkbox');
      const label = screen.getByText('label');

      expect(checkBox).not.toBeChecked();

      fireEvent.click(label);

      expect(checkBox).toBeChecked();
    });
  });
});
