import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import TableCell from './TableCell';

const meta: Meta<typeof TableCell> = {
  title: 'Components/Table/TableCell',
  component: TableCell,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: { type: 'text' },
      description: 'Content to display inside the table cell',
    },
    padding: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: 'Padding size of the cell',
    },
    align: {
      control: { type: 'select' },
      options: ['left', 'center', 'right'],
      description: 'Text alignment within the cell',
    },
    backgroundColor: {
      control: { type: 'color' },
      description: 'Background color of the cell',
    },
    textColor: {
      control: { type: 'color' },
      description: 'Text color of the cell',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the table cell is disabled',
    },
    isHeader: {
      control: { type: 'boolean' },
      description: 'Whether this is a header cell',
    },
    colSpan: {
      control: { type: 'number' },
      description: 'Column span for the cell',
    },
    rowSpan: {
      control: { type: 'number' },
      description: 'Row span for the cell',
    },
    onClick: {
      action: 'cell-clicked',
      description: 'Click handler for the cell',
    },
  },
  decorators: [
    (Story) => (
      <table style={{ border: '1px solid #dee2e6', borderCollapse: 'collapse' }}>
        <tbody>
          <tr>
            <Story />
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
    children: 'Table Cell Content',
    padding: 'medium',
    align: 'left',
    onClick: action('cell-clicked'),
  },
};

export const Disabled: Story = {
  args: {
    children: 'Disabled Cell',
    disabled: true,
    onClick: action('cell-clicked'),
  },
};

export const HeaderCell: Story = {
  args: {
    children: 'Header Cell',
    isHeader: true,
    padding: 'medium',
    align: 'center',
    onClick: action('cell-clicked'),
  },
};

export const SmallPadding: Story = {
  args: {
    children: 'Small Padding',
    padding: 'small',
    onClick: action('cell-clicked'),
  },
};

export const LargePadding: Story = {
  args: {
    children: 'Large Padding',
    padding: 'large',
    onClick: action('cell-clicked'),
  },
};

export const CenterAligned: Story = {
  args: {
    children: 'Center Aligned',
    align: 'center',
    onClick: action('cell-clicked'),
  },
};

export const RightAligned: Story = {
  args: {
    children: 'Right Aligned',
    align: 'right',
    onClick: action('cell-clicked'),
  },
};

export const CustomColors: Story = {
  args: {
    children: 'Custom Colors',
    backgroundColor: '#e3f2fd',
    textColor: '#1976d2',
    onClick: action('cell-clicked'),
  },
};

export const WithColSpan: Story = {
  args: {
    children: 'Spans 2 Columns',
    colSpan: 2,
    backgroundColor: '#fff3e0',
    onClick: action('cell-clicked'),
  },
  decorators: [
    (Story) => (
      <table style={{ border: '1px solid #dee2e6', borderCollapse: 'collapse', width: '400px' }}>
        <tbody>
          <tr>
            <Story />
            <td style={{ border: '1px solid #dee2e6', padding: '12px' }}>Normal Cell</td>
          </tr>
        </tbody>
      </table>
    ),
  ],
};

export const ClickableCell: Story = {
  args: {
    children: 'Click me!',
    backgroundColor: '#f8f9fa',
    onClick: action('cell-clicked'),
  },
};
