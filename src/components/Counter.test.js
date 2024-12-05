import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'; // For better assertions
import Counter from './Counter';

describe('Counter Component', () => {
  it('renders Counter component and buttons', () => {
    render(<Counter />);
    
    // Check initial state
    expect(screen.getByText('Counter: 0')).toBeInTheDocument();
    
    // Check if buttons are present
    expect(screen.getByText('Increment')).toBeInTheDocument();
    expect(screen.getByText('Decrement')).toBeInTheDocument();
    expect(screen.getByText('Reset')).toBeInTheDocument();
  });

  it('increments the counter', () => {
    render(<Counter />);
    const incrementButton = screen.getByText('Increment');

    fireEvent.click(incrementButton);
    expect(screen.getByText('Counter: 1')).toBeInTheDocument();
  });

  it('decrements the counter', () => {
    render(<Counter />);
    const incrementButton = screen.getByText('Increment');
    const decrementButton = screen.getByText('Decrement');

    fireEvent.click(incrementButton); // Increment first to avoid going negative
    fireEvent.click(decrementButton);
    expect(screen.getByText('Counter: 0')).toBeInTheDocument();
  });

  it('resets the counter', () => {
    render(<Counter />);
    const incrementButton = screen.getByText('Increment');
    const resetButton = screen.getByText('Reset');

    fireEvent.click(incrementButton);
    fireEvent.click(resetButton);
    expect(screen.getByText('Counter: 0')).toBeInTheDocument();
  });
});
