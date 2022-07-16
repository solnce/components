import { render, screen } from '@testing-library/react';
import { Txt } from '@atoms/Txt';

describe('<Txt />', () => {
  describe('prop: className', () => {
    test('should have className', () => {
      const { container } = render(<Txt className="test">text</Txt>);

      expect(container.querySelector('p')).toHaveClass('test');
    });
  });

  describe('prop: children', () => {
    test('should render children text', () => {
      const children = 'child';
      const { container } = render(<Txt>{children}</Txt>);

      expect(container.querySelector('p')).toHaveTextContent('child');
    });

    test('should render children, ', () => {
      const children = <span data-testid="child" />;
      const { container } = render(<Txt>{children}</Txt>);

      expect(container.querySelector('p')).toContainElement(
        screen.getByTestId('child')
      );
    });
  });
});
