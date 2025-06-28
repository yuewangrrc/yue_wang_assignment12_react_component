import React from 'react';
import { action } from '@storybook/addon-actions';
import Label from './Label';

// Storybook Meta configuration
const meta = {
  title: 'UI Garden/Label',
  component: Label,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A flexible label component for form fields with multiple variants and sizes. Supports required and optional field indicators.'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: { type: 'text' },
      description: 'Content to display inside the label',
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: 'Size of the label',
    },
    variant: {
      control: { type: 'select' },
      options: ['default', 'primary', 'secondary', 'success', 'warning', 'danger'],
      description: 'Variant/style of the label',
    },
    backgroundColor: {
      control: { type: 'color' },
      description: 'Background color of the label',
    },
    textColor: {
      control: { type: 'color' },
      description: 'Text color of the label',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the label is disabled',
    },
    required: {
      control: { type: 'boolean' },
      description: 'Whether the label shows required asterisk',
    },
    htmlFor: {
      control: { type: 'text' },
      description: 'ID of the form element this label is for',
    },
    onClick: {
      action: 'label-clicked',
      description: 'Click handler for the label',
    },
  },
};

export default meta;

// Basic Stories
export const Default = {
  args: {
    children: 'Default Label',
    size: 'medium',
    variant: 'default',
    onClick: action('label-clicked'),
  },
  parameters: {
    docs: {
      description: {
        story: 'Basic label without any special indicators.'
      }
    }
  }
};

export const Disabled = {
  args: {
    children: 'Disabled Label',
    disabled: true,
    size: 'medium',
    variant: 'default',
    onClick: action('label-clicked'),
  },
  parameters: {
    docs: {
      description: {
        story: 'Disabled label state with grayed out appearance.'
      }
    }
  }
};

export const Small = {
  args: {
    children: 'Small Label',
    size: 'small',
    variant: 'default',
    onClick: action('label-clicked'),
  },
  parameters: {
    docs: {
      description: {
        story: 'Small size label with reduced font size.'
      }
    }
  }
};

export const Large = {
  args: {
    children: 'Large Label',
    size: 'large',
    variant: 'default',
    onClick: action('label-clicked'),
  },
  parameters: {
    docs: {
      description: {
        story: 'Large size label with increased font size.'
      }
    }
  }
};

export const Primary = {
  args: {
    children: 'Primary Label',
    variant: 'primary',
    onClick: action('label-clicked'),
  },
};

export const Secondary = {
  args: {
    children: 'Secondary Label',
    variant: 'secondary',
    onClick: action('label-clicked'),
  },
};

export const Success = {
  args: {
    children: 'Success Label',
    variant: 'success',
    onClick: action('label-clicked'),
  },
};

export const Warning = {
  args: {
    children: 'Warning Label',
    variant: 'warning',
    onClick: action('label-clicked'),
  },
};

export const Danger = {
  args: {
    children: 'Danger Label',
    variant: 'danger',
    onClick: action('label-clicked'),
  },
};

export const Required = {
  args: {
    children: 'Required Field',
    required: true,
    variant: 'default',
    onClick: action('label-clicked'),
  },
};

export const CustomColors = {
  args: {
    children: 'Custom Colored Label',
    backgroundColor: '#ff6b35',
    textColor: '#ffffff',
    onClick: action('label-clicked'),
  },
};

// Form Examples
export const FormExample = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '300px' }}>
    <div>
      <Label variant="required" htmlFor="email">Email Address</Label>
      <input 
        id="email" 
        type="email" 
        style={{ 
          width: '100%', 
          padding: '8px', 
          border: '1px solid #ddd', 
          borderRadius: '4px',
          marginTop: '4px'
        }} 
      />
    </div>
    <div>
      <Label variant="optional" htmlFor="phone">Phone Number</Label>
      <input 
        id="phone" 
        type="tel" 
        style={{ 
          width: '100%', 
          padding: '8px', 
          border: '1px solid #ddd', 
          borderRadius: '4px',
          marginTop: '4px'
        }} 
      />
    </div>
    <div>
      <Label disabled htmlFor="disabled-field">Disabled Field</Label>
      <input 
        id="disabled-field" 
        disabled 
        style={{ 
          width: '100%', 
          padding: '8px', 
          border: '1px solid #ddd', 
          borderRadius: '4px',
          marginTop: '4px',
          opacity: '0.6'
        }} 
      />
    </div>
  </div>
);

export const AllVariants = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
    <Label variant="default">Default Label</Label>
    <Label variant="required">Required Field Label</Label>
    <Label variant="optional">Optional Field Label</Label>
    <Label disabled>Disabled Label</Label>
  </div>
);

export const AllSizes = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
    <Label size="small">Small Label</Label>
    <Label size="medium">Medium Label</Label>
    <Label size="large">Large Label</Label>
  </div>
);

// New Stories
export const ForFormField = {
  args: {
    children: 'Email Address',
    htmlFor: 'email-input',
    required: true,
  },
  render: (args) => (
    <div>
      <Label {...args} />
      <br />
      <input id="email-input" type="email" placeholder="Enter your email" style={{ marginTop: '8px', padding: '8px' }} />
    </div>
  ),
};
