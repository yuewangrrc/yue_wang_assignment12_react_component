import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import HeroImage from './HeroImage';

describe('HeroImage Component', () => {
  const defaultProps = {
    src: 'https://example.com/test-image.jpg',
    alt: 'Test image',
  };

  test('renders hero image component and is visible', async () => {
    render(<HeroImage {...defaultProps} />);
    
    // Initially shows loading
    expect(screen.getByText('Loading...')).toBeInTheDocument();
    
    // Simulate image load
    const img = screen.getByAltText('Test image');
    fireEvent.load(img);
    
    await waitFor(() => {
      expect(img).toBeVisible();
    });
  });

  test('changes appearance when disabled', async () => {
    render(<HeroImage {...defaultProps} disabled />);
    
    const img = screen.getByAltText('Test image');
    fireEvent.load(img);
    
    await waitFor(() => {
      expect(img).toHaveStyle({
        filter: 'grayscale(100%) brightness(0.7)',
      });
    });
  });

  test('handles click events when not disabled', async () => {
    const handleClick = jest.fn();
    render(<HeroImage {...defaultProps} onClick={handleClick} />);
    
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
    render(<HeroImage {...defaultProps} onClick={handleClick} disabled />);
    
    const img = screen.getByAltText('Test image');
    fireEvent.load(img);
    
    await waitFor(() => {
      const container = img.closest('div');
      fireEvent.click(container!);
      expect(handleClick).not.toHaveBeenCalled();
    });
  });

  test('displays overlay content when provided', async () => {
    const overlayContent = <div>Overlay Text</div>;
    render(<HeroImage {...defaultProps} overlay={overlayContent} />);
    
    const img = screen.getByAltText('Test image');
    fireEvent.load(img);
    
    await waitFor(() => {
      expect(screen.getByText('Overlay Text')).toBeInTheDocument();
    });
  });

  test('shows error message when image fails to load', async () => {
    render(<HeroImage {...defaultProps} />);
    
    const img = screen.getByAltText('Test image');
    fireEvent.error(img);
    
    await waitFor(() => {
      expect(screen.getByText('Failed to load image')).toBeInTheDocument();
    });
  });

  test('applies custom dimensions', () => {
    render(<HeroImage {...defaultProps} height="300px" width="600px" />);
    
    const container = screen.getByText('Loading...').closest('div');
    expect(container).toHaveStyle({
      height: '300px',
      width: '600px',
    });
  });
});
