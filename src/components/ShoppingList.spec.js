import { render, screen } from '@testing-library/react';
import ShoppingList from './ShoppingList';
import userEvent from '@testing-library/user-event';

test('renders a heading', () => {
  render(<ShoppingList />);
  const headingElement = screen.getByText(/Shopping List/i);
  expect(headingElement).toBeInTheDocument();
});

test('add and show an item', () => {
  render(<ShoppingList />);
  userEvent.type(screen.getByRole('textbox'), "Milk");
  userEvent.click(screen.getByRole('button'));
  const itemElement = screen.getByText(/Milk/i);
  expect(itemElement).toBeInTheDocument();
});
