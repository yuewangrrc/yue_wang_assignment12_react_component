import type { Meta, StoryObj } from '@storybook/react';
import Table from './Table';
import TableHeader from './TableHeader/TableHeader';
import TableFooter from './TableFooter/TableFooter';
import TableRow from './TableRow/TableRow';
import TableCell from './TableCell/TableCell';

const meta: Meta<typeof Table> = {
  title: 'Components/Table/Table',
  component: Table,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: false,
      description: 'Content to display inside the table',
    },
    backgroundColor: {
      control: { type: 'color' },
      description: 'Background color of the table',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the table is disabled',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <TableHeader>
          <TableRow>
            <TableCell isHeader>Name</TableCell>
            <TableCell isHeader>Age</TableCell>
            <TableCell isHeader>City</TableCell>
          </TableRow>
        </TableHeader>
        <tbody>
          <TableRow>
            <TableCell>John Doe</TableCell>
            <TableCell>30</TableCell>
            <TableCell>New York</TableCell>
          </TableRow>
          <TableRow striped>
            <TableCell>Jane Smith</TableCell>
            <TableCell>25</TableCell>
            <TableCell>Los Angeles</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Bob Johnson</TableCell>
            <TableCell>35</TableCell>
            <TableCell>Chicago</TableCell>
          </TableRow>
        </tbody>
      </>
    ),
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: (
      <>
        <TableHeader>
          <TableRow>
            <TableCell isHeader>Name</TableCell>
            <TableCell isHeader>Age</TableCell>
            <TableCell isHeader>City</TableCell>
          </TableRow>
        </TableHeader>
        <tbody>
          <TableRow>
            <TableCell>Disabled Table</TableCell>
            <TableCell>N/A</TableCell>
            <TableCell>N/A</TableCell>
          </TableRow>
        </tbody>
      </>
    ),
  },
};

export const WithFooter: Story = {
  args: {
    children: (
      <>
        <TableHeader>
          <TableRow>
            <TableCell isHeader>Product</TableCell>
            <TableCell isHeader>Price</TableCell>
            <TableCell isHeader>Quantity</TableCell>
            <TableCell isHeader>Total</TableCell>
          </TableRow>
        </TableHeader>
        <tbody>
          <TableRow>
            <TableCell>Laptop</TableCell>
            <TableCell>$999.99</TableCell>
            <TableCell>2</TableCell>
            <TableCell>$1,999.98</TableCell>
          </TableRow>
          <TableRow striped>
            <TableCell>Mouse</TableCell>
            <TableCell>$29.99</TableCell>
            <TableCell>3</TableCell>
            <TableCell>$89.97</TableCell>
          </TableRow>
        </tbody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}><strong>Grand Total</strong></TableCell>
            <TableCell><strong>$2,089.95</strong></TableCell>
          </TableRow>
        </TableFooter>
      </>
    ),
  },
};

export const CustomColors: Story = {
  args: {
    backgroundColor: '#f8f9fa',
    children: (
      <>
        <TableHeader backgroundColor="#007bff" textColor="#ffffff">
          <TableRow>
            <TableCell isHeader>ID</TableCell>
            <TableCell isHeader>Username</TableCell>
            <TableCell isHeader>Status</TableCell>
          </TableRow>
        </TableHeader>
        <tbody>
          <TableRow>
            <TableCell>001</TableCell>
            <TableCell>admin</TableCell>
            <TableCell>Active</TableCell>
          </TableRow>
          <TableRow backgroundColor="#d4edda">
            <TableCell>002</TableCell>
            <TableCell>user1</TableCell>
            <TableCell>Active</TableCell>
          </TableRow>
          <TableRow backgroundColor="#f8d7da">
            <TableCell>003</TableCell>
            <TableCell>user2</TableCell>
            <TableCell>Inactive</TableCell>
          </TableRow>
        </tbody>
      </>
    ),
  },
};

export const ResponsiveTable: Story = {
  args: {
    children: (
      <>
        <TableHeader>
          <TableRow>
            <TableCell isHeader>Employee</TableCell>
            <TableCell isHeader>Department</TableCell>
            <TableCell isHeader>Position</TableCell>
            <TableCell isHeader>Salary</TableCell>
            <TableCell isHeader>Start Date</TableCell>
          </TableRow>
        </TableHeader>
        <tbody>
          <TableRow>
            <TableCell>Alice Johnson</TableCell>
            <TableCell>Engineering</TableCell>
            <TableCell>Senior Developer</TableCell>
            <TableCell>$85,000</TableCell>
            <TableCell>2020-03-15</TableCell>
          </TableRow>
          <TableRow striped>
            <TableCell>Bob Smith</TableCell>
            <TableCell>Marketing</TableCell>
            <TableCell>Marketing Manager</TableCell>
            <TableCell>$65,000</TableCell>
            <TableCell>2019-07-22</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Carol Davis</TableCell>
            <TableCell>HR</TableCell>
            <TableCell>HR Specialist</TableCell>
            <TableCell>$55,000</TableCell>
            <TableCell>2021-01-10</TableCell>
          </TableRow>
        </tbody>
      </>
    ),
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};
