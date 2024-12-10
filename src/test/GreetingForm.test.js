import { render, screen, fireEvent } from '@testing-library/react';
import GreetingForm from '../components/GreetingForm';

describe('GreetingForm Component', () => {
  test('displays greeting message on form submit', () => {
    render(<GreetingForm />);
    const input = screen.getByLabelText(/name/i);
    const button = screen.getByText(/submit/i);

    fireEvent.change(input, { target: { value: 'John' } });
    fireEvent.click(button);

    expect(screen.getByText(/hello, john/i)).toBeInTheDocument();
  });
});
