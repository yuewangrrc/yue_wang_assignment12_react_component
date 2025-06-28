import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Text from './Text';

describe('Text Component', () => {
  test('renders text component and is visible', () => {
    render(<Text>Test Text Content</Text>);
    const text = screen.getByText('Test Text Content');
    expect(text).toBeInTheDocument();
    expect(text).toBeVisible();
  });

  test('changes appearance when disabled', () => {
    render(<Text disabled>Disabled Text</Text>);
    const text = screen.getByText('Disabled Text');
    
    expect(text).toHaveStyle({
      opacity: '0.6',
      cursor: 'not-allowed',
      color: '#6c757d'
    });
  });

  test('handles click events when not disabled', () => {
    const handleClick = jest.fn();
    render(<Text onClick={handleClick}>Clickable Text</Text>);
    
    const text = screen.getByText('Clickable Text');
    fireEvent.click(text);
    
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('does not handle click events when disabled', () => {
    const handleClick = jest.fn();
    render(<Text onClick={handleClick} disabled>Disabled Clickable Text</Text>);
    
    const text = screen.getByText('Disabled Clickable Text');
    fireEvent.click(text);
    
    expect(handleClick).not.toHaveBeenCalled();
  });

  test('applies different sizes correctly', () => {
    const { rerender } = render(<Text size="small">Small Text</Text>);
    let text = screen.getByText('Small Text');
    expect(text).toHaveStyle({ fontSize: '12px' });

    rerender(<Text size="medium">Medium Text</Text>);
    text = screen.getByText('Medium Text');
    expect(text).toHaveStyle({ fontSize: '14px' });

    rerender(<Text size="large">Large Text</Text>);
    text = screen.getByText('Large Text');
    expect(text).toHaveStyle({ fontSize: '16px' });
  });

  test('applies different weights correctly', () => {
    const { rerender } = render(<Text weight="light">Light Text</Text>);
    let text = screen.getByText('Light Text');
    expect(text).toHaveStyle({ fontWeight: '300' });

    rerender(<Text weight="bold">Bold Text</Text>);
    text = screen.getByText('Bold Text');
    expect(text).toHaveStyle({ fontWeight: '700' });
  });

  test('renders different HTML elements correctly', () => {
    const { rerender } = render(<Text as="h1">Heading Text</Text>);
    let text = screen.getByRole('heading', { level: 1 });
    expect(text).toBeInTheDocument();

    rerender(<Text as="span">Span Text</Text>);
    text = screen.getByText('Span Text');
    expect(text.tagName).toBe('SPAN');
  });

  test('applies custom colors', () => {
    render(
      <Text color="#ff0000" backgroundColor="#00ff00">
        Colored Text
      </Text>
    );
    
    const text = screen.getByText('Colored Text');
    expect(text).toHaveStyle({
      color: '#ff0000',
      backgroundColor: '#00ff00'
    });
  });

  test('applies text styling properties', () => {
    render(
      <Text italic underline align="center">
        Styled Text
      </Text>
    );
    
    const text = screen.getByText('Styled Text');
    expect(text).toHaveStyle({
      fontStyle: 'italic',
      textDecoration: 'underline',
      textAlign: 'center'
    });
  });
});
