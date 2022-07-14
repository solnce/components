import { render } from '@testing-library/react';
import { Button } from '@atoms/Button';

describe('<Button />', () => {
  describe('prop: children', () => {
    test('should render children text', () => {
      const { getByText } = render(<Button>text</Button>);

      expect(getByText('text')).toBeInTheDocument();
    });
  });
});
