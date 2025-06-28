import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import TableHeader from './TableHeader';
import TableRow from '../TableRow/TableRow';
import TableCell from '../TableCell/TableCell';

const renderTableHeader = (props: { children: React.ReactNode } & Record<string, any>) => {
  return render(
    <table>
      <TableHeader {...props} />
    </table>
  );
};

describe('TableHeader Component', () => {
  test('renders table header component and is visible', () => {
    renderTableHeader({
      children: (
        <TableRow>
          <TableCell isHeader>Header Content</TableCell>
        </TableRow>
      )
    });
    
    const headerContent = screen.getByText('Header Content');
    expect(headerContent).toBeInTheDocument();
    expect(headerContent).toBeVisible();
  });

  test('changes appearance when disabled', () => {
    renderTableHeader({
      disabled: true,
      children: (
        <TableRow>
          <TableCell isHeader>Disabled Header</TableCell>
        </TableRow>
      )
    });
    
    const header = screen.getByText('Disabled Header').closest('thead');
    expect(header).toHaveStyle({
      opacity: '0.6',
      backgroundColor: '#f8f9fa',
      color: '#6c757d'
    });
  });

  test('applies custom colors correctly', () => {
    renderTableHeader({
      backgroundColor: '#ff0000',
      textColor: '#ffffff',
      children: (
        <TableRow>
          <TableCell isHeader>Colored Header</TableCell>
        </TableRow>
      )
    });
    
    const header = screen.getByText('Colored Header').closest('thead');
    expect(header).toHaveStyle({
      backgroundColor: '#ff0000',
      color: '#ffffff'
    });
  });

  test('renders multiple header rows correctly', () => {
    renderTableHeader({
      children: (
        <>
          <TableRow>
            <TableCell isHeader>First Header Row</TableCell>
          </TableRow>
          <TableRow>
            <TableCell isHeader>Second Header Row</TableCell>
          </TableRow>
        </>
      )
    });
    
    expect(screen.getByText('First Header Row')).toBeInTheDocument();
    expect(screen.getByText('Second Header Row')).toBeInTheDocument();
  });

  test('applies default background color when not disabled', () => {
    renderTableHeader({
      children: (
        <TableRow>
          <TableCell isHeader>Default Header</TableCell>
        </TableRow>
      )
    });
    
    const header = screen.getByText('Default Header').closest('thead');
    expect(header).toHaveStyle({
      backgroundColor: '#e9ecef'
    });
  });

  test('has correct font weight styling', () => {
    renderTableHeader({
      children: (
        <TableRow>
          <TableCell isHeader>Header Text</TableCell>
        </TableRow>
      )
    });
    
    const header = screen.getByText('Header Text').closest('thead');
    expect(header).toHaveStyle({
      fontWeight: '600'
    });
  });
});
