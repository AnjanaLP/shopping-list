import { render, screen } from '@testing-library/react';
import Item from './Item';
import userEvent from '@testing-library/user-event';

test('when item checkbox is checked then text has a line through it', () => {
  render(<Item text="Cereal"/>);
  userEvent.click(screen.getByRole('checkbox'));
  const itemElement = screen.getByText(/Cereal/i);
  expect(itemElement).toHaveStyle("text-decoration: line-through");
});
