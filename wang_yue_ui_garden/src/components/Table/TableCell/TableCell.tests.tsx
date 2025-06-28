import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TableCell from './TableCell';

const renderTableCell = (props = {}) => {
  return render(
    <table>
      <tbody>
        <tr>
          <TableCell {...props} />
        </tr>
      </tbody>
    </table>
  );
};

describe('TableCell Component', () => {
  test('renders table cell component and is visible', () => {
    renderTableCell({ children: 'Test Cell Content' });
    const cell = screen.getByText('Test Cell Content');
    expect(cell).toBeInTheDocument();
    expect(cell).toBeVisible();
  });

  test('changes appearance when disabled', () => {
    renderTableCell({ children: 'Disabled Cell', disabled: true });
    const cell = screen.getByText('Disabled Cell');
    
    expect(cell).toHaveStyle({
      opacity: '0.6',
      cursor: 'not-allowed',
      backgroundColor: '#f8f9fa',
      color: '#6c757d'
    });
  });

  test('handles click events when not disabled', () => {
    const handleClick = jest.fn();
    renderTableCell({ 
      children: 'Clickable Cell', 
      onClick: handleClick 
    });
    
    const cell = screen.getByText('Clickable Cell');
    fireEvent.click(cell);
    
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('does not handle click events when disabled', () => {
    const handleClick = jest.fn();
    renderTableCell({ 
      children: 'Disabled Clickable Cell', 
      onClick: handleClick, 
      disabled: true 
    });
    
    const cell = screen.getByText('Disabled Clickable Cell');
    fireEvent.click(cell);
    
    expect(handleClick).not.toHaveBeenCalled();
  });

  test('renders as header cell when isHeader is true', () => {
    renderTableCell({ 
      children: 'Header Cell', 
      isHeader: true 
    });
    
    const cell = screen.getByText('Header Cell');
    expect(cell.tagName).toBe('TH');
    expect(cell).toHaveStyle({
      fontWeight: '600'
    });
  });

  test('renders as regular cell when isHeader is false', () => {
    renderTableCell({ 
      children: 'Regular Cell', 
      isHeader: false 
    });
    
    const cell = screen.getByText('Regular Cell');
    expect(cell.tagName).toBe('TD');
  });

  test('applies different padding sizes correctly', () => {
    const { rerender } = render(
      <table>
        <tbody>
          <tr>
            <TableCell padding="small">Small Padding</TableCell>
          </tr>
        </tbody>
      </table>
    );
    
    let cell = screen.getByText('Small Padding');
    expect(cell).toHaveStyle({ padding: '8px' });

    rerender(
      <table>
        <tbody>
          <tr>
            <TableCell padding="medium">Medium Padding</TableCell>
          </tr>
        </tbody>
      </table>
    );
    cell = screen.getByText('Medium Padding');
    expect(cell).toHaveStyle({ padding: '12px' });

    rerender(
      <table>
        <tbody>
          <tr>
            <TableCell padding="large">Large Padding</TableCell>
          </tr>
        </tbody>
      </table>
    );
    cell = screen.getByText('Large Padding');
    expect(cell).toHaveStyle({ padding: '16px' });
  });

  test('applies text alignment correctly', () => {
    const { rerender } = render(
      <table>
        <tbody>
          <tr>
            <TableCell align="left">Left Aligned</TableCell>
          </tr>
        </tbody>
      </table>
    );
    
    let cell = screen.getByText('Left Aligned');
    expect(cell).toHaveStyle({ textAlign: 'left' });

    rerender(
      <table>
        <tbody>
          <tr>
            <TableCell align="center">Center Aligned</TableCell>
          </tr>
        </tbody>
      </table>
    );
    cell = screen.getByText('Center Aligned');
    expect(cell).toHaveStyle({ textAlign: 'center' });

    rerender(
      <table>
        <tbody>
          <tr>
            <TableCell align="right">Right Aligned</TableCell>
          </tr>
        </tbody>
      </table>
    );
    cell = screen.getByText('Right Aligned');
    expect(cell).toHaveStyle({ textAlign: 'right' });
  });

  test('applies custom colors', () => {
    renderTableCell({
      children: 'Colored Cell',
      backgroundColor: '#ff0000',
      textColor: '#ffffff'
    });
    
    const cell = screen.getByText('Colored Cell');
    expect(cell).toHaveStyle({
      backgroundColor: '#ff0000',
      color: '#ffffff'
    });
  });

  test('applies colSpan and rowSpan attributes', () => {
    renderTableCell({
      children: 'Spanned Cell',
      colSpan: 2,
      rowSpan: 3
    });
    
    const cell = screen.getByText('Spanned Cell');
    expect(cell).toHaveAttribute('colspan', '2');
    expect(cell).toHaveAttribute('rowspan', '3');
  });
});
