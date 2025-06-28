import type { Meta, StoryObj } from '@storybook/react';
import TableFooter from './TableFooter';
import TableRow from '../TableRow/TableRow';
import TableCell from '../TableCell/TableCell';

const meta: Meta<typeof TableFooter> = {
  title: 'Components/Table/TableFooter',
  component: TableFooter,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: false,
      description: 'Content to display inside the table footer (TableRow components)',
    },
    backgroundColor: {
      control: { type: 'color' },
      description: 'Background color of the footer',
    },
    textColor: {
      control: { type: 'color' },
      description: 'Text color of the footer',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the table footer is disabled',
    },
  },
  decorators: [
    (Story) => (
      <table style={{ border: '1px solid #dee2e6', borderCollapse: 'collapse', width: '600px' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid #dee2e6', padding: '12px', backgroundColor: '#e9ecef' }}>Name</th>
            <th style={{ border: '1px solid #dee2e6', padding: '12px', backgroundColor: '#e9ecef' }}>Age</th>
            <th style={{ border: '1px solid #dee2e6', padding: '12px', backgroundColor: '#e9ecef' }}>City</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #dee2e6', padding: '12px' }}>John Doe</td>
            <td style={{ border: '1px solid #dee2e6', padding: '12px' }}>30</td>
            <td style={{ border: '1px solid #dee2e6', padding: '12px' }}>New York</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #dee2e6', padding: '12px' }}>Jane Smith</td>
            <td style={{ border: '1px solid #dee2e6', padding: '12px' }}>25</td>
            <td style={{ border: '1px solid #dee2e6', padding: '12px' }}>Los Angeles</td>
          </tr>
        </tbody>
        <Story />
      </table>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <TableRow>
        <TableCell>Total Records: 2</TableCell>
        <TableCell>Average Age: 27.5</TableCell>
        <TableCell>-</TableCell>
      </TableRow>
    ),
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: (
      <TableRow>
        <TableCell>Disabled Footer</TableCell>
        <TableCell>No Data</TableCell>
        <TableCell>-</TableCell>
      </TableRow>
    ),
  },
};

export const CustomColors: Story = {
  args: {
    backgroundColor: '#e3f2fd',
    textColor: '#1976d2',
    children: (
      <TableRow>
        <TableCell>Custom Footer</TableCell>
        <TableCell>Blue Theme</TableCell>
        <TableCell>Styled</TableCell>
      </TableRow>
    ),
  },
};

export const MultipleRows: Story = {
  args: {
    children: (
      <>
        <TableRow>
          <TableCell>Subtotal</TableCell>
          <TableCell>$150.00</TableCell>
          <TableCell>-</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Tax (10%)</TableCell>
          <TableCell>$15.00</TableCell>
          <TableCell>-</TableCell>
        </TableRow>
        <TableRow>
          <TableCell><strong>Total</strong></TableCell>
          <TableCell><strong>$165.00</strong></TableCell>
          <TableCell>-</TableCell>
        </TableRow>
      </>
    ),
  },
};

export const SummaryFooter: Story = {
  args: {
    backgroundColor: '#f8f9fa',
    children: (
      <TableRow>
        <TableCell colSpan={2}><strong>Grand Total</strong></TableCell>
        <TableCell align="right"><strong>$1,250.00</strong></TableCell>
      </TableRow>
    ),
  },
};
