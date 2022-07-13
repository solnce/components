import { render } from '@testing-library/react';
import { Button } from '@atoms/Button';

describe('App', () => {
  test('renders App component', () => {
    render(<Button>aaa</Button>);
  });
});
