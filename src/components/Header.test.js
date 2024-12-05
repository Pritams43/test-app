import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // For better assertions
import Header from './Header';

describe('Header Component', () => {
  
  it('renders with the default title', () => {
    render(<Header />);
    expect(screen.getByText('Default Title')).toBeInTheDocument();
  });

  it('renders with a custom title', () => {
    const customTitle = 'Welcome to My App';
    render(<Header title={customTitle} />);
    expect(screen.getByText(customTitle)).toBeInTheDocument();
  });

  it('applies correct styles', () => {
    render(<Header />);
    const headerElement = screen.getByRole('heading', { level: 1 });
    expect(headerElement).toHaveStyle({
      textAlign: 'center',
      color: 'white',
    });
  });
});
