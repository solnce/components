import { render, screen } from '@testing-library/react';
import { Button } from '@atoms/Button';

describe('<Button />', () => {
  describe('prop: className', () => {
    test('should have className', () => {
      const { container } = render(<Button className="test">text</Button>);

      expect(container.querySelector('button')).toHaveClass('test');
    });
  });

  describe('prop: children', () => {
    test('should render children text', () => {
      const children = "child";
      render(<Button>{children}</Button>);

      expect(screen.getByText('child')).toBeInTheDocument();
    });

    test('should render children, ', () => {
      const children = <div data-testid="child" />
      const {container} = render(<Button>{children}</Button>);

      expect(container.querySelector("button")).toContainElement(screen.getByTestId('child'));
    });
  });

  describe('prop: href', () => {
    test('should render anchor link tag', () => {
      const { container } = render(<Button href="#test">text</Button>);

      expect(container.querySelector("a")).toBeInTheDocument();
      expect(container.querySelector("a")).toHaveAttribute('href');

      expect(container.querySelector("button")).not.toBeInTheDocument();
    });

    test('should render button tag', () => {
      const { container } = render(<Button>text</Button>);

      expect(container.querySelector("button")).toBeInTheDocument();

      expect(container.querySelector("a")).not.toBeInTheDocument();
    });
  });
});
