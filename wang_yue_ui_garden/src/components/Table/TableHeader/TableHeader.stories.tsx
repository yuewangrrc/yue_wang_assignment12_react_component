import type { Meta, StoryObj } from '@storybook/react';
import TableHeader from './TableHeader';
import TableRow from '../TableRow/TableRow';
import TableCell from '../TableCell/TableCell';

const meta: Meta<typeof TableHeader> = {
  title: 'Components/Table/TableHeader',
  component: TableHeader,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: false,
      description: 'Content to display inside the table header (TableRow components)',
    },
    backgroundColor: {
      control: { type: 'color' },
      description: 'Background color of the header',
    },
    textColor: {
      control: { type: 'color' },
      description: 'Text color of the header',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the table header is disabled',
    },
  },
  decorators: [
    (Story) => (
      <table style={{ border: '1px solid #dee2e6', borderCollapse: 'collapse', width: '600px' }}>
        <Story />
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
        <TableCell isHeader>Name</TableCell>
        <TableCell isHeader>Age</TableCell>
        <TableCell isHeader>City</TableCell>
      </TableRow>
    ),
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: (
      <TableRow>
        <TableCell isHeader>Disabled Header</TableCell>
        <TableCell isHeader>Column 2</TableCell>
        <TableCell isHeader>Column 3</TableCell>
      </TableRow>
    ),
  },
};

export const CustomColors: Story = {
  args: {
    backgroundColor: '#1976d2',
    textColor: '#ffffff',
    children: (
      <TableRow>
        <TableCell isHeader>Product</TableCell>
        <TableCell isHeader>Price</TableCell>
        <TableCell isHeader>Stock</TableCell>
      </TableRow>
    ),
  },
};

export const MultipleHeaderRows: Story = {
  args: {
    children: (
      <>
        <TableRow>
          <TableCell isHeader colSpan={3} align="center">Employee Information</TableCell>
        </TableRow>
        <TableRow>
          <TableCell isHeader>Name</TableCell>
          <TableCell isHeader>Age</TableCell>
          <TableCell isHeader>Location</TableCell>
        </TableRow>
      </>
    ),
  },
};

export const AlignedHeaders: Story = {
  args: {
    children: (
      <TableRow>
        <TableCell isHeader align="left">Name</TableCell>
        <TableCell isHeader align="center">Age</TableCell>
        <TableCell isHeader align="right">Salary</TableCell>
      </TableRow>
    ),
  },
};

export const DarkTheme: Story = {
  args: {
    backgroundColor: '#343a40',
    textColor: '#ffffff',
    children: (
      <TableRow>
        <TableCell isHeader>ID</TableCell>
        <TableCell isHeader>Username</TableCell>
        <TableCell isHeader>Status</TableCell>
      </TableRow>
    ),
  },
};
