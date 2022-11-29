import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App from './App';

test('Finds morning button', () => {
  render(<App />);
  screen.debug();
  const morningButton = screen.getByText(/Morning/i);
  expect(morningButton).toBeInTheDocument();
});

test('Finds Monday button and clicks', async () => {
  render(<App />);
  const mondayButton = screen.getByText(/Monday/i);
  expect(mondayButton).toBeInTheDocument();
  await userEvent.click(mondayButton)
});
