import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Card from './Card';

describe('Card Component', () => {
  test('renders card component and is visible', () => {
    render(<Card>Test Card Content</Card>);
    const card = screen.getByText('Test Card Content');
    expect(card).toBeInTheDocument();
    expect(card).toBeVisible();
  });

  test('changes appearance when disabled', () => {
    render(<Card disabled>Disabled Card</Card>);
    const card = screen.getByText('Disabled Card');
    
    // Check if the card has disabled styling
    expect(card).toHaveStyle({
      opacity: '0.6',
      cursor: 'not-allowed',
      backgroundColor: '#f8f9fa',
      color: '#6c757d'
    });
  });

  test('handles click events when not disabled', () => {
    const handleClick = jest.fn();
    render(<Card onClick={handleClick}>Clickable Card</Card>);
    
    const card = screen.getByText('Clickable Card');
    fireEvent.click(card);
    
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('does not handle click events when disabled', () => {
    const handleClick = jest.fn();
    render(<Card onClick={handleClick} disabled>Disabled Clickable Card</Card>);
    
    const card = screen.getByText('Disabled Clickable Card');
    fireEvent.click(card);
    
    expect(handleClick).not.toHaveBeenCalled();
  });

  test('applies custom colors', () => {
    render(
      <Card 
        backgroundColor="#ff0000" 
        textColor="#ffffff" 
        borderColor="#000000"
      >
        Colored Card
      </Card>
    );
    
    const card = screen.getByText('Colored Card');
    expect(card).toHaveStyle({
      backgroundColor: '#ff0000',
      color: '#ffffff',
      borderColor: '#000000'
    });
  });

  test('applies different padding sizes', () => {
    const { rerender } = render(<Card padding="small">Small Card</Card>);
    let card = screen.getByText('Small Card');
    expect(card).toHaveStyle({ padding: '12px' });

    rerender(<Card padding="medium">Medium Card</Card>);
    card = screen.getByText('Medium Card');
    expect(card).toHaveStyle({ padding: '16px' });

    rerender(<Card padding="large">Large Card</Card>);
    card = screen.getByText('Large Card');
    expect(card).toHaveStyle({ padding: '24px' });
  });
});