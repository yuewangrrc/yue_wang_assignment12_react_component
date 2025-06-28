import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import RadioButton from './RadioButton';
import React, { useState } from 'react';

const meta: Meta<typeof RadioButton> = {
  title: 'Components/RadioButton',
  component: RadioButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: { type: 'text' },
      description: 'Label text for the radio button',
    },
    value: {
      control: { type: 'text' },
      description: 'Value of the radio button',
    },
    name: {
      control: { type: 'text' },
      description: 'Name attribute for grouping radio buttons',
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: 'Size of the radio button',
    },
    color: {
      control: { type: 'color' },
      description: 'Color of the radio button when checked',
    },
    textColor: {
      control: { type: 'color' },
      description: 'Text color of the label',
    },
    checked: {
      control: { type: 'boolean' },
      description: 'Whether the radio button is checked',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the radio button is disabled',
    },
    onChange: {
      action: 'radio-changed',
      description: 'Change handler for the radio button',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Option 1',
    value: 'option1',
    name: 'example',
    checked: false,
    disabled: false,
    size: 'medium',
    onChange: action('radio-changed'),
  },
};

export const Checked: Story = {
  args: {
    label: 'Selected Option',
    value: 'selected',
    name: 'example',
    checked: true,
    disabled: false,
    size: 'medium',
    onChange: action('radio-changed'),
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Option',
    value: 'disabled',
    name: 'example',
    checked: false,
    disabled: true,
    size: 'medium',
    onChange: action('radio-changed'),
  },
};

export const DisabledChecked: Story = {
  args: {
    label: 'Disabled Checked',
    value: 'disabled-checked',
    name: 'example',
    checked: true,
    disabled: true,
    size: 'medium',
    onChange: action('radio-changed'),
  },
};

export const Small: Story = {
  args: {
    label: 'Small Radio',
    value: 'small',
    name: 'size-example',
    size: 'small',
    onChange: action('radio-changed'),
  },
};

export const Large: Story = {
  args: {
    label: 'Large Radio',
    value: 'large',
    name: 'size-example',
    size: 'large',
    onChange: action('radio-changed'),
  },
};

export const CustomColor: Story = {
  args: {
    label: 'Custom Color',
    value: 'custom',
    name: 'color-example',
    checked: true,
    color: '#ff6b35',
    onChange: action('radio-changed'),
  },
};

export const CustomTextColor: Story = {
  args: {
    label: 'Custom Text Color',
    value: 'custom-text',
    name: 'text-color-example',
    textColor: '#9b59b6',
    onChange: action('radio-changed'),
  },
};

// Interactive group example
const RadioGroupExample = () => {
  const [selectedValue, setSelectedValue] = useState('option1');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <h3>Choose an option:</h3>
      <RadioButton
        label="Option 1"
        value="option1"
        name="group-example"
        checked={selectedValue === 'option1'}
        onChange={setSelectedValue}
      />
      <RadioButton
        label="Option 2"
        value="option2"
        name="group-example"
        checked={selectedValue === 'option2'}
        onChange={setSelectedValue}
      />
      <RadioButton
        label="Option 3"
        value="option3"
        name="group-example"
        checked={selectedValue === 'option3'}
        onChange={setSelectedValue}
      />
      <RadioButton
        label="Disabled Option"
        value="option4"
        name="group-example"
        checked={selectedValue === 'option4'}
        disabled={true}
        onChange={setSelectedValue}
      />
      <p>Selected: {selectedValue}</p>
    </div>
  );
};

export const RadioGroup: Story = {
  render: () => <RadioGroupExample />,
};
