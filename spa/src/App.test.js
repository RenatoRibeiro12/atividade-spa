import { render, screen } from '@testing-library/react';
import routes from './Rotas';

test('renders learn react link', () => {
  render(<routes />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
