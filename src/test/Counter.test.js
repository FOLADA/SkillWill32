import { render, screen, fireEvent } from '@testing-library/react';
import Counter from '../components/Counter';

describe('Counter Component', () => {
  test('renders initial count as 0', () => {
    render(<Counter/>);
    expect(screen.getByText(/count:/i)).toHaveTextContent('Count: 0');
  });

  test('increments count on button click', () => {
    render(<Counter />);
    const button = screen.getByRole('button', { name: /increment/i });
    fireEvent.click(button);
    expect(screen.getByText(/count:/i)).toHaveTextContent('Count: 1');
  });
});
