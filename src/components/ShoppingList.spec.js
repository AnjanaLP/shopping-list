import { render, screen } from '@testing-library/react';
import ShoppingList from './ShoppingList';

test('renders a heading', () => {
  render(<ShoppingList />);
  const headingElement = screen.getByText(/Shopping List/i);
  expect(headingElement).toBeInTheDocument();
});
