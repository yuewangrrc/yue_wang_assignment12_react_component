import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Label from './Label';

describe('Label Component', () => {
  test('renders label component and is visible', () => {
    render(<Label>Test Label</Label>);
    const label = screen.getByText('Test Label');
    expect(label).toBeInTheDocument();
    expect(label).toBeVisible();
  });

  test('changes appearance when disabled', () => {
    render(<Label disabled>Disabled Label</Label>);
    const label = screen.getByText('Disabled Label');
    
    expect(label).toHaveStyle({
      opacity: '0.6',
      cursor: 'not-allowed',
      backgroundColor: '#f8f9fa',
      color: '#6c757d'
    });
  });

  test('handles click events when not disabled', () => {
    const handleClick = jest.fn();
    render(<Label onClick={handleClick}>Clickable Label</Label>);
    
    const label = screen.getByText('Clickable Label');
    fireEvent.click(label);
    
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('does not handle click events when disabled', () => {
    const handleClick = jest.fn();
    render(<Label onClick={handleClick} disabled>Disabled Clickable Label</Label>);
    
    const label = screen.getByText('Disabled Clickable Label');
    fireEvent.click(label);
    
    expect(handleClick).not.toHaveBeenCalled();
  });

  test('applies different sizes correctly', () => {
    const { rerender } = render(<Label size="small">Small Label</Label>);
    let label = screen.getByText('Small Label');
    expect(label).toHaveStyle({ fontSize: '12px', padding: '4px 8px' });

    rerender(<Label size="medium">Medium Label</Label>);
    label = screen.getByText('Medium Label');
    expect(label).toHaveStyle({ fontSize: '14px', padding: '8px 12px' });

    rerender(<Label size="large">Large Label</Label>);
    label = screen.getByText('Large Label');
    expect(label).toHaveStyle({ fontSize: '16px', padding: '12px 16px' });
  });

  test('applies different variants correctly', () => {
    const { rerender } = render(<Label variant="primary">Primary Label</Label>);
    let label = screen.getByText('Primary Label');
    expect(label).toHaveStyle({ backgroundColor: '#0066cc', color: '#ffffff' });

    rerender(<Label variant="success">Success Label</Label>);
    label = screen.getByText('Success Label');
    expect(label).toHaveStyle({ backgroundColor: '#28a745', color: '#ffffff' });

    rerender(<Label variant="danger">Danger Label</Label>);
    label = screen.getByText('Danger Label');
    expect(label).toHaveStyle({ backgroundColor: '#dc3545', color: '#ffffff' });
  });

  test('shows required asterisk when required prop is true', () => {
    render(<Label required>Required Label</Label>);
    
    expect(screen.getByText('Required Label')).toBeInTheDocument();
    expect(screen.getByText('*')).toBeInTheDocument();
  });

  test('applies custom colors', () => {
    render(
      <Label backgroundColor="#ff0000" textColor="#ffffff">
        Custom Colored Label
      </Label>
    );
    
    const label = screen.getByText('Custom Colored Label');
    expect(label).toHaveStyle({
      backgroundColor: '#ff0000',
      color: '#ffffff'
    });
  });

  test('applies htmlFor attribute correctly', () => {
    render(<Label htmlFor="test-input">Form Label</Label>);
    
    const label = screen.getByText('Form Label');
    expect(label).toHaveAttribute('for', 'test-input');
  });
});
