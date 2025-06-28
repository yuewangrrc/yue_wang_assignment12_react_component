import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import Img from './Img';

describe('Img Component', () => {
  const defaultProps = {
    src: 'https://example.com/test-image.jpg',
    alt: 'Test image',
  };

  test('renders img component and is visible', async () => {
    render(<Img {...defaultProps} showLoading={false} />);
    
    const img = screen.getByAltText('Test image');
    expect(img).toBeInTheDocument();
    
    // Simulate image load
    fireEvent.load(img);
    
    await waitFor(() => {
      expect(img).toBeVisible();
    });
  });

  test('changes appearance when disabled', async () => {
    render(<Img {...defaultProps} disabled showLoading={false} />);
    
    const img = screen.getByAltText('Test image');
    fireEvent.load(img);
    
    await waitFor(() => {
      expect(img).toHaveStyle({
        filter: 'grayscale(100%) brightness(0.7)',
      });
    });
    
    const container = img.closest('div');
    expect(container).toHaveStyle({
      opacity: '0.6',
      cursor: 'not-allowed',
    });
  });

  test('handles click events when not disabled', async () => {
    const handleClick = jest.fn();
    render(<Img {...defaultProps} onClick={handleClick} showLoading={false} />);
    
    const img = screen.getByAltText('Test image');
    fireEvent.load(img);
    
    await waitFor(() => {
      const container = img.closest('div');
      fireEvent.click(container!);
      expect(handleClick).toHaveBeenCalledTimes(1);
    });
  });

  test('does not handle click events when disabled', async () => {
    const handleClick = jest.fn();
    render(<Img {...defaultProps} onClick={handleClick} disabled showLoading={false} />);
    
    const img = screen.getByAltText('Test image');
    fireEvent.load(img);
    
    await waitFor(() => {
      const container = img.closest('div');
      fireEvent.click(container!);
      expect(handleClick).not.toHaveBeenCalled();
    });
  });

  test('shows loading placeholder initially', () => {
    render(<Img {...defaultProps} showLoading={true} />);
    
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  test('shows error message when image fails to load', async () => {
    render(<Img {...defaultProps} />);
    
    const img = screen.getByAltText('Test image');
    fireEvent.error(img);
    
    await waitFor(() => {
      expect(screen.getByText('Failed to load image')).toBeInTheDocument();
    });
  });

  test('applies custom dimensions', () => {
    render(<Img {...defaultProps} width="300px" height="200px" showLoading={false} />);
    
    const img = screen.getByAltText('Test image');
    const container = img.closest('div');
    
    expect(container).toHaveStyle({
      width: '300px',
      height: '200px',
    });
  });

  test('applies border styling', async () => {
    render(
      <Img 
        {...defaultProps} 
        borderColor="#ff0000" 
        borderRadius="8px"
        showLoading={false}
      />
    );
    
    const img = screen.getByAltText('Test image');
    fireEvent.load(img);
    
    await waitFor(() => {
      expect(img).toHaveStyle({
        border: '2px solid #ff0000',
        borderRadius: '8px',
      });
    });
  });
});
