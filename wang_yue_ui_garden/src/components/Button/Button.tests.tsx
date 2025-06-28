import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from './Button';

describe('Button Component', () => {
  test('renders button with text', () => {
    render(<Button>Click me</Button>);
    const buttonElement = screen.getByRole('button', { name: /click me/i });
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toBeVisible();
  });

  test('button is visible', () => {
    render(<Button>Test Button</Button>);
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeVisible();
  });

  test('background color changes when disabled', () => {
    const { rerender } = render(<Button backgroundColor="#007bff">Enabled Button</Button>);
    const buttonElement = screen.getByRole('button');
    
    // Test enabled state
    expect(buttonElement).toHaveStyle('background-color: #007bff');
    expect(buttonElement).toHaveStyle('cursor: pointer');
    
    // Test disabled state
    rerender(<Button disabled backgroundColor="#007bff">Disabled Button</Button>);
    expect(buttonElement).toHaveStyle('background-color: #6c757d');
    expect(buttonElement).toHaveStyle('cursor: not-allowed');
    expect(buttonElement).toHaveStyle('opacity: 0.6');
  });

  test('calls onClick when clicked', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Clickable Button</Button>);
    const buttonElement = screen.getByRole('button');
    
    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('does not call onClick when disabled', () => {
    const handleClick = jest.fn();
    render(<Button disabled onClick={handleClick}>Disabled Button</Button>);
    const buttonElement = screen.getByRole('button');
    
    fireEvent.click(buttonElement);
    expect(handleClick).not.toHaveBeenCalled();
  });

  test('renders different sizes correctly', () => {
    const { rerender } = render(<Button size="small">Small Button</Button>);
    let buttonElement = screen.getByRole('button');
    expect(buttonElement).toHaveStyle('padding: 8px 16px');
    expect(buttonElement).toHaveStyle('font-size: 14px');

    rerender(<Button size="medium">Medium Button</Button>);
    buttonElement = screen.getByRole('button');
    expect(buttonElement).toHaveStyle('padding: 12px 24px');
    expect(buttonElement).toHaveStyle('font-size: 16px');

    rerender(<Button size="large">Large Button</Button>);
    buttonElement = screen.getByRole('button');
    expect(buttonElement).toHaveStyle('padding: 16px 32px');
    expect(buttonElement).toHaveStyle('font-size: 18px');
  });

  test('renders different variants correctly', () => {
    const { rerender } = render(<Button variant="primary">Primary Button</Button>);
    let buttonElement = screen.getByRole('button');
    expect(buttonElement).toHaveStyle('background-color: #007bff');

    rerender(<Button variant="secondary">Secondary Button</Button>);
    buttonElement = screen.getByRole('button');
    expect(buttonElement).toHaveStyle('background-color: #6c757d');

    rerender(<Button variant="outline">Outline Button</Button>);
    buttonElement = screen.getByRole('button');
    expect(buttonElement).toHaveStyle('background-color: transparent');
    expect(buttonElement).toHaveStyle('border: 2px solid #007bff');
  });
});
