import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TableRow from './TableRow';
import TableCell from '../TableCell/TableCell';

const renderTableRow = (props = {}) => {
  return render(
    <table>
      <tbody>
        <TableRow {...props} />
      </tbody>
    </table>
  );
};

describe('TableRow Component', () => {
  test('renders table row component and is visible', () => {
    renderTableRow({
      children: (
        <>
          <TableCell>Test Cell 1</TableCell>
          <TableCell>Test Cell 2</TableCell>
        </>
      )
    });
    
    const cell1 = screen.getByText('Test Cell 1');
    const cell2 = screen.getByText('Test Cell 2');
    
    expect(cell1).toBeInTheDocument();
    expect(cell2).toBeInTheDocument();
    expect(cell1).toBeVisible();
    expect(cell2).toBeVisible();
  });

  test('changes appearance when disabled', () => {
    renderTableRow({
      disabled: true,
      children: (
        <TableCell>Disabled Row</TableCell>
      )
    });
    
    const row = screen.getByText('Disabled Row').closest('tr');
    expect(row).toHaveStyle({
      opacity: '0.6',
      cursor: 'not-allowed',
      backgroundColor: '#f8f9fa'
    });
  });

  test('handles click events when not disabled', () => {
    const handleClick = jest.fn();
    renderTableRow({
      onClick: handleClick,
      children: (
        <TableCell>Clickable Row</TableCell>
      )
    });
    
    const row = screen.getByText('Clickable Row').closest('tr');
    fireEvent.click(row!);
    
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('does not handle click events when disabled', () => {
    const handleClick = jest.fn();
    renderTableRow({
      onClick: handleClick,
      disabled: true,
      children: (
        <TableCell>Disabled Clickable Row</TableCell>
      )
    });
    
    const row = screen.getByText('Disabled Clickable Row').closest('tr');
    fireEvent.click(row!);
    
    expect(handleClick).not.toHaveBeenCalled();
  });

  test('applies striped styling correctly', () => {
    renderTableRow({
      striped: true,
      children: (
        <TableCell>Striped Row</TableCell>
      )
    });
    
    const row = screen.getByText('Striped Row').closest('tr');
    expect(row).toHaveStyle({
      backgroundColor: '#f8f9fa'
    });
  });

  test('applies highlighted styling correctly', () => {
    renderTableRow({
      highlighted: true,
      children: (
        <TableCell>Highlighted Row</TableCell>
      )
    });
    
    const row = screen.getByText('Highlighted Row').closest('tr');
    expect(row).toHaveStyle({
      backgroundColor: '#e3f2fd'
    });
  });

  test('applies custom background color', () => {
    renderTableRow({
      backgroundColor: '#ff0000',
      children: (
        <TableCell>Custom Row</TableCell>
      )
    });
    
    const row = screen.getByText('Custom Row').closest('tr');
    expect(row).toHaveStyle({
      backgroundColor: '#ff0000'
    });
  });

  test('shows pointer cursor when clickable', () => {
    renderTableRow({
      onClick: jest.fn(),
      children: (
        <TableCell>Clickable Row</TableCell>
      )
    });
    
    const row = screen.getByText('Clickable Row').closest('tr');
    expect(row).toHaveStyle({
      cursor: 'pointer'
    });
  });

  test('shows default cursor when not clickable', () => {
    renderTableRow({
      children: (
        <TableCell>Regular Row</TableCell>
      )
    });
    
    const row = screen.getByText('Regular Row').closest('tr');
    expect(row).toHaveStyle({
      cursor: 'default'
    });
  });
});
