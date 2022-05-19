import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('close button disabled & open button NOT disabled on load. when I click the open button, the open button is disabled and the close button is no longer disabled. then, when I click on the close button, the close button is disabled and the open button is no longer disabled', () => {
  render(<App />);
  const openButton = screen.getByText(/Open/i);
  const closeButton = screen.getByText(/Close/i);
  expect(closeButton).toBeDisabled();
  expect(openButton).not.toBeDisabled();
  fireEvent.click(openButton);
  expect(openButton).toBeDisabled();
  expect(closeButton).not.toBeDisabled();
  fireEvent.click(closeButton);
  expect(closeButton).toBeDisabled();
  expect(openButton).not.toBeDisabled();
});
