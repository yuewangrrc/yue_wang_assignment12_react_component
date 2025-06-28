import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import TableFooter from './TableFooter';
import TableRow from '../TableRow/TableRow';
import TableCell from '../TableCell/TableCell';

const renderTableFooter = (props: any = {}) => {
  return render(
    <table>
      <TableFooter {...props}>
        {props.children}
      </TableFooter>
    </table>
  );
};

describe('TableFooter Component', () => {
  test('renders table footer component and is visible', () => {
    renderTableFooter({
      children: (
        <TableRow>
          <TableCell>Footer Content</TableCell>
        </TableRow>
      )
    });
    
    const footerContent = screen.getByText('Footer Content');
    expect(footerContent).toBeInTheDocument();
    expect(footerContent).toBeVisible();
  });

  test('changes appearance when disabled', () => {
    renderTableFooter({
      disabled: true,
      children: (
        <TableRow>
          <TableCell>Disabled Footer</TableCell>
        </TableRow>
      )
    });
    
    const footer = screen.getByText('Disabled Footer').closest('tfoot');
    expect(footer).toHaveStyle({
      opacity: '0.6',
      backgroundColor: '#f8f9fa',
      color: '#6c757d'
    });
  });

  test('applies custom colors correctly', () => {
    renderTableFooter({
      backgroundColor: '#ff0000',
      textColor: '#ffffff',
      children: (
        <TableRow>
          <TableCell>Colored Footer</TableCell>
        </TableRow>
      )
    });
    
    const footer = screen.getByText('Colored Footer').closest('tfoot');
    expect(footer).toHaveStyle({
      backgroundColor: '#ff0000',
      color: '#ffffff'
    });
  });

  test('renders multiple rows correctly', () => {
    renderTableFooter({
      children: (
        <>
          <TableRow>
            <TableCell>First Row</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Second Row</TableCell>
          </TableRow>
        </>
      )
    });
    
    expect(screen.getByText('First Row')).toBeInTheDocument();
    expect(screen.getByText('Second Row')).toBeInTheDocument();
  });

  test('applies default background color when not disabled', () => {
    renderTableFooter({
      children: (
        <TableRow>
          <TableCell>Default Footer</TableCell>
        </TableRow>
      )
    });
    
    const footer = screen.getByText('Default Footer').closest('tfoot');
    expect(footer).toHaveStyle({
      backgroundColor: '#f8f9fa'
    });
  });

  test('has correct font weight styling', () => {
    renderTableFooter({
      children: (
        <TableRow>
          <TableCell>Footer Text</TableCell>
        </TableRow>
      )
    });
    
    const footer = screen.getByText('Footer Text').closest('tfoot');
    expect(footer).toHaveStyle({
      fontWeight: '500'
    });
  });
});
