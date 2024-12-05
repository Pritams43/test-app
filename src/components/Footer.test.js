import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // For assertions like toBeInTheDocument
import Footer from './Footer';

describe('Footer Component', () => {
  it('renders the footer with copyright text', () => {
    render(<Footer />);
    
    // Check if the footer text is present
    expect(screen.getByText('© 2024 Simple React App. All rights reserved.')).toBeInTheDocument();
  });
});
