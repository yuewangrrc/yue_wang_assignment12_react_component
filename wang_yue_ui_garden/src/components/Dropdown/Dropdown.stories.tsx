import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Dropdown from './Dropdown';
import { DropdownProps } from './Dropdown.types';

const meta: Meta<typeof Dropdown> = {
  title: 'Components/Dropdown',
  component: Dropdown,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: 'Size of the dropdown',
    },
    backgroundColor: {
      control: { type: 'color' },
      description: 'Background color of the dropdown',
    },
    textColor: {
      control: { type: 'color' },
      description: 'Text color of the dropdown',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the dropdown is disabled',
    },
    fullWidth: {
      control: { type: 'boolean' },
      description: 'Whether the dropdown should take full width',
    },
    placeholder: {
      control: { type: 'text' },
      description: 'Placeholder text when no option is selected',
    },
    onChange: {
      action: 'changed',
      description: 'Callback function when selection changes',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const defaultOptions = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
  { value: 'option4', label: 'Option 4', disabled: true },
  { value: 'option5', label: 'Option 5' },
];

export const Default: Story = {
  args: {
    options: defaultOptions,
    placeholder: 'Select an option',
    size: 'medium',
    disabled: false,
    fullWidth: false,
    onChange: action('dropdown-changed'),
  },
};

export const Disabled: Story = {
  args: {
    options: defaultOptions,
    placeholder: 'Disabled dropdown',
    size: 'medium',
    disabled: true,
    fullWidth: false,
    onChange: action('dropdown-changed'),
  },
};

export const Small: Story = {
  args: {
    options: defaultOptions,
    placeholder: 'Small dropdown',
    size: 'small',
    disabled: false,
    fullWidth: false,
    onChange: action('dropdown-changed'),
  },
};

export const Large: Story = {
  args: {
    options: defaultOptions,
    placeholder: 'Large dropdown',
    size: 'large',
    disabled: false,
    fullWidth: false,
    onChange: action('dropdown-changed'),
  },
};

export const WithCustomColors: Story = {
  args: {
    options: defaultOptions,
    placeholder: 'Custom colored dropdown',
    size: 'medium',
    backgroundColor: '#f0f8ff',
    textColor: '#2c3e50',
    disabled: false,
    fullWidth: false,
    onChange: action('dropdown-changed'),
  },
};

export const FullWidth: Story = {
  args: {
    options: defaultOptions,
    placeholder: 'Full width dropdown',
    size: 'medium',
    disabled: false,
    fullWidth: true,
    onChange: action('dropdown-changed'),
  },
  decorators: [
    (Story) => (
      <div style={{ width: '400px', padding: '20px' }}>
        <Story />
      </div>
    ),
  ],
};

export const WithSelectedValue: Story = {
  args: {
    options: defaultOptions,
    value: 'option2',
    placeholder: 'Select an option',
    size: 'medium',
    disabled: false,
    fullWidth: false,
    onChange: action('dropdown-changed'),
  },
};

export const WithManyOptions: Story = {
  args: {
    options: [
      { value: 'option1', label: 'Option 1' },
      { value: 'option2', label: 'Option 2' },
      { value: 'option3', label: 'Option 3' },
      { value: 'option4', label: 'Option 4' },
      { value: 'option5', label: 'Option 5' },
      { value: 'option6', label: 'Option 6' },
      { value: 'option7', label: 'Option 7' },
      { value: 'option8', label: 'Option 8' },
      { value: 'option9', label: 'Option 9' },
      { value: 'option10', label: 'Option 10' },
    ],
    placeholder: 'Scrollable dropdown',
    size: 'medium',
    disabled: false,
    fullWidth: false,
    onChange: action('dropdown-changed'),
  },
};
