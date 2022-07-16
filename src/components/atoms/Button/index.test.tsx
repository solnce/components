import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from '@atoms/Button';

describe('<Button />', () => {
  describe('prop: className', () => {
    test('should have className', () => {
      render(<Button className="test">button</Button>);

      expect(screen.getByText('button')).toHaveClass('test');
    });
  });

  describe('prop: children', () => {
    test('should render children text', () => {
      const children = 'child';
      const { container } = render(<Button>{children}</Button>);

      expect(container.querySelector('button')).toHaveTextContent('child');
    });

    test('should render children, ', () => {
      const children = <div data-testid="child" />;
      const { container } = render(<Button>{children}</Button>);

      expect(container.querySelector('button')).toContainElement(
        screen.getByTestId('child')
      );
    });
  });

  describe('prop: href', () => {
    test('should render anchor link tag', () => {
      const { container } = render(<Button href="#test">button</Button>);

      expect(container.querySelector('a')).toBeInTheDocument();
      expect(screen.getByText('button')).toHaveAttribute('href');

      expect(container.querySelector('button')).not.toBeInTheDocument();
    });

    test('should render button tag', () => {
      const { container } = render(<Button>text</Button>);

      expect(container.querySelector('button')).toBeInTheDocument();

      expect(container.querySelector('a')).not.toBeInTheDocument();
    });
  });

  describe('prop: onClick', () => {
    test('should fire event from anchor link tag', () => {
      const onClick = jest.fn();
      const { container } = render(
        <Button href="#test" onClick={onClick}>
          button
        </Button>
      );

      expect(container.querySelector('a')).toBeInTheDocument();
      expect(screen.getByText('button')).toHaveAttribute('href');

      fireEvent.click(screen.getByText('button'));
      expect(onClick).toHaveBeenCalled();
    });

    test('should fire event from button tag', () => {
      const onClick = jest.fn();
      const { container } = render(<Button onClick={onClick}>button</Button>);

      expect(container.querySelector('button')).toBeInTheDocument();

      fireEvent.click(screen.getByText('button'));
      expect(onClick).toHaveBeenCalled();
    });
  });
});
