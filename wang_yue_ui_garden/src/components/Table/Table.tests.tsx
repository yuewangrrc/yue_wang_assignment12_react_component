import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Table from './Table';
import TableHeader from './TableHeader/TableHeader';
import TableFooter from './TableFooter/TableFooter';
import TableRow from './TableRow/TableRow';
import TableCell from './TableCell/TableCell';

describe('Table Component', () => {
  test('renders table component and is visible', () => {
    render(
      <Table>
        <TableHeader>
          <TableRow>
            <TableCell isHeader>Header</TableCell>
          </TableRow>
        </TableHeader>
        <tbody>
          <TableRow>
            <TableCell>Content</TableCell>
          </TableRow>
        </tbody>
      </Table>
    );
    
    const headerCell = screen.getByText('Header');
    const contentCell = screen.getByText('Content');
    
    expect(headerCell).toBeInTheDocument();
    expect(contentCell).toBeInTheDocument();
    expect(headerCell).toBeVisible();
    expect(contentCell).toBeVisible();
  });

  test('changes appearance when disabled', () => {
    render(
      <Table disabled>
        <tbody>
          <TableRow>
            <TableCell>Disabled Table</TableCell>
          </TableRow>
        </tbody>
      </Table>
    );
    
    const table = screen.getByText('Disabled Table').closest('table');
    expect(table).toHaveStyle({
      opacity: '0.6',
      backgroundColor: '#f8f9fa'
    });
  });

  test('applies custom background color', () => {
    render(
      <Table backgroundColor="#ff0000">
        <tbody>
          <TableRow>
            <TableCell>Colored Table</TableCell>
          </TableRow>
        </tbody>
      </Table>
    );
    
    const table = screen.getByText('Colored Table').closest('table');
    expect(table).toHaveStyle({
      backgroundColor: '#ff0000'
    });
  });

  test('renders complete table structure with header and footer', () => {
    render(
      <Table>
        <TableHeader>
          <TableRow>
            <TableCell isHeader>Name</TableCell>
            <TableCell isHeader>Age</TableCell>
          </TableRow>
        </TableHeader>
        <tbody>
          <TableRow>
            <TableCell>John</TableCell>
            <TableCell>30</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Jane</TableCell>
            <TableCell>25</TableCell>
          </TableRow>
        </tbody>
        <TableFooter>
          <TableRow>
            <TableCell>Total: 2</TableCell>
            <TableCell>Avg: 27.5</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    );
    
    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('Age')).toBeInTheDocument();
    expect(screen.getByText('John')).toBeInTheDocument();
    expect(screen.getByText('Jane')).toBeInTheDocument();
    expect(screen.getByText('Total: 2')).toBeInTheDocument();
    expect(screen.getByText('Avg: 27.5')).toBeInTheDocument();
  });

  test('has proper table structure and styling', () => {
    render(
      <Table className="test-table">
        <tbody>
          <TableRow>
            <TableCell>Test Content</TableCell>
          </TableRow>
        </tbody>
      </Table>
    );
    
    const table = screen.getByText('Test Content').closest('table');
    expect(table).toHaveClass('test-table');
    expect(table).toHaveStyle({
      width: '100%',
      borderCollapse: 'collapse'
    });
  });
});
