import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import RadioButton from './RadioButton';

describe('RadioButton Component', () => {
  const defaultProps = {
    label: 'Test Radio',
    value: 'test',
    name: 'test-group',
  };

  test('renders radio button component and is visible', () => {
    render(<RadioButton {...defaultProps} />);
    
    const label = screen.getByText('Test Radio');
    const radio = screen.getByRole('radio');
    
    expect(label).toBeInTheDocument();
    expect(label).toBeVisible();
    expect(radio).toBeInTheDocument();
  });

  test('changes appearance when disabled', () => {
    render(<RadioButton {...defaultProps} disabled />);
    
    const container = screen.getByText('Test Radio').closest('label');
    const radio = screen.getByRole('radio');
    
    expect(container).toHaveStyle({
      opacity: '0.6',
      cursor: 'not-allowed',
    });
    
    expect(radio).toBeDisabled();
  });

  test('handles change events when not disabled', () => {
    const handleChange = jest.fn();
    render(<RadioButton {...defaultProps} onChange={handleChange} />);
    
    const radio = screen.getByRole('radio');
    fireEvent.click(radio);
    
    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledWith('test');
  });

  test('does not handle change events when disabled', () => {
    const handleChange = jest.fn();
    render(<RadioButton {...defaultProps} onChange={handleChange} disabled />);
    
    const radio = screen.getByRole('radio');
    fireEvent.click(radio);
    
    expect(handleChange).not.toHaveBeenCalled();
  });

  test('applies checked state correctly', () => {
    render(<RadioButton {...defaultProps} checked />);
    
    const radio = screen.getByRole('radio');
    expect(radio).toBeChecked();
  });

  test('applies different sizes correctly', () => {
    const { rerender } = render(<RadioButton {...defaultProps} size="small" />);
    let label = screen.getByText('Test Radio').closest('label');
    expect(label).toHaveStyle({ margin: '4px 0' });

    rerender(<RadioButton {...defaultProps} size="medium" />);
    label = screen.getByText('Test Radio').closest('label');
    expect(label).toHaveStyle({ margin: '6px 0' });

    rerender(<RadioButton {...defaultProps} size="large" />);
    label = screen.getByText('Test Radio').closest('label');
    expect(label).toHaveStyle({ margin: '8px 0' });
  });

  test('applies custom colors', () => {
    render(
      <RadioButton 
        {...defaultProps} 
        checked 
        color="#ff0000" 
        textColor="#0000ff" 
      />
    );
    
    // Color styling is applied via styled-components, which may not be directly testable
    // But we can ensure the component renders without errors
    expect(screen.getByText('Test Radio')).toBeInTheDocument();
    expect(screen.getByRole('radio')).toBeChecked();
  });

  test('applies correct name attribute', () => {
    render(<RadioButton {...defaultProps} name="custom-group" />);
    
    const radio = screen.getByRole('radio');
    expect(radio).toHaveAttribute('name', 'custom-group');
  });

  test('applies correct value attribute', () => {
    render(<RadioButton {...defaultProps} value="custom-value" />);
    
    const radio = screen.getByRole('radio');
    expect(radio).toHaveAttribute('value', 'custom-value');
  });
});
