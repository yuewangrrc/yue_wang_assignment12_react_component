import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import TableRow from './TableRow';
import TableCell from '../TableCell/TableCell';

const meta: Meta<typeof TableRow> = {
  title: 'Components/Table/TableRow',
  component: TableRow,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: false,
      description: 'Content to display inside the table row (TableCell components)',
    },
    backgroundColor: {
      control: { type: 'color' },
      description: 'Background color of the row',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the table row is disabled',
    },
    striped: {
      control: { type: 'boolean' },
      description: 'Whether this row should have alternating color',
    },
    highlighted: {
      control: { type: 'boolean' },
      description: 'Whether this row should be highlighted',
    },
    onClick: {
      action: 'row-clicked',
      description: 'Click handler for the row',
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
          <Story />
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
      <>
        <TableCell>John Doe</TableCell>
        <TableCell>30</TableCell>
        <TableCell>New York</TableCell>
      </>
    ),
    onClick: action('row-clicked'),
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: (
      <>
        <TableCell>Disabled Row</TableCell>
        <TableCell>N/A</TableCell>
        <TableCell>N/A</TableCell>
      </>
    ),
    onClick: action('row-clicked'),
  },
};

export const Striped: Story = {
  args: {
    striped: true,
    children: (
      <>
        <TableCell>Jane Smith</TableCell>
        <TableCell>25</TableCell>
        <TableCell>Los Angeles</TableCell>
      </>
    ),
    onClick: action('row-clicked'),
  },
};

export const Highlighted: Story = {
  args: {
    highlighted: true,
    children: (
      <>
        <TableCell>Important Row</TableCell>
        <TableCell>35</TableCell>
        <TableCell>Chicago</TableCell>
      </>
    ),
    onClick: action('row-clicked'),
  },
};

export const CustomBackgroundColor: Story = {
  args: {
    backgroundColor: '#fff3cd',
    children: (
      <>
        <TableCell>Custom Row</TableCell>
        <TableCell>28</TableCell>
        <TableCell>Miami</TableCell>
      </>
    ),
    onClick: action('row-clicked'),
  },
};

export const ClickableRow: Story = {
  args: {
    children: (
      <>
        <TableCell>Click me!</TableCell>
        <TableCell>Interactive</TableCell>
        <TableCell>Row</TableCell>
      </>
    ),
    onClick: action('row-clicked'),
  },
};

export const MultipleRows: Story = {
  render: () => (
    <table style={{ border: '1px solid #dee2e6', borderCollapse: 'collapse', width: '600px' }}>
      <thead>
        <tr>
          <th style={{ border: '1px solid #dee2e6', padding: '12px', backgroundColor: '#e9ecef' }}>Name</th>
          <th style={{ border: '1px solid #dee2e6', padding: '12px', backgroundColor: '#e9ecef' }}>Age</th>
          <th style={{ border: '1px solid #dee2e6', padding: '12px', backgroundColor: '#e9ecef' }}>City</th>
        </tr>
      </thead>
      <tbody>
        <TableRow onClick={action('row-1-clicked')}>
          <TableCell>John Doe</TableCell>
          <TableCell>30</TableCell>
          <TableCell>New York</TableCell>
        </TableRow>
        <TableRow striped onClick={action('row-2-clicked')}>
          <TableCell>Jane Smith</TableCell>
          <TableCell>25</TableCell>
          <TableCell>Los Angeles</TableCell>
        </TableRow>
        <TableRow highlighted onClick={action('row-3-clicked')}>
          <TableCell>Bob Johnson</TableCell>
          <TableCell>35</TableCell>
          <TableCell>Chicago</TableCell>
        </TableRow>
        <TableRow disabled onClick={action('row-4-clicked')}>
          <TableCell>Disabled User</TableCell>
          <TableCell>N/A</TableCell>
          <TableCell>N/A</TableCell>
        </TableRow>
      </tbody>
    </table>
  ),
};
