import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

const meta: Meta<typeof Button> = {
  title: 'Yue Wang UI Garden/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A versatile button component with multiple variants, sizes, and states. Built with styled-components and fully responsive.'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
      description: 'Button content/text'
    },
    backgroundColor: { 
      control: 'color',
      description: 'Custom background color of the button'
    },
    textColor: { 
      control: 'color',
      description: 'Custom text color of the button'
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: 'Size of the button'
    },
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'outline'],
      description: 'Visual variant style of the button'
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled'
    },
    type: {
      control: { type: 'select' },
      options: ['button', 'submit', 'reset'],
      description: 'HTML button type'
    },
    onClick: {
      action: 'clicked',
      description: 'Function called when button is clicked'
    }
  },
  args: { 
    children: 'Button',
    size: 'medium',
    variant: 'primary',
    disabled: false,
    type: 'button'
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Primary Stories - Basic button variants
export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary Button',
  },
  parameters: {
    docs: {
      description: {
        story: 'The primary button variant with default styling. Use for main actions.'
      }
    }
  }
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary Button',
  },
  parameters: {
    docs: {
      description: {
        story: 'The secondary button variant. Use for secondary actions.'
      }
    }
  }
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Outline Button',
  },
  parameters: {
    docs: {
      description: {
        story: 'The outline button variant with transparent background and colored border.'
      }
    }
  }
};

// Size Stories
export const Small: Story = {
  args: {
    size: 'small',
    children: 'Small Button',
  },
  parameters: {
    docs: {
      description: {
        story: 'Small size button with reduced padding and font size.'
      }
    }
  }
};

export const Medium: Story = {
  args: {
    size: 'medium',
    children: 'Medium Button',
  },
  parameters: {
    docs: {
      description: {
        story: 'Medium size button (default). Standard size for most use cases.'
      }
    }
  }
};

export const Large: Story = {
  args: {
    size: 'large',
    children: 'Large Button',
  },
  parameters: {
    docs: {
      description: {
        story: 'Large size button with increased padding and font size.'
      }
    }
  }
};

// State Stories
export const Disabled = {
  args: {
    disabled: true,
    children: 'Disabled Button',
  },
  parameters: {
    docs: {
      description: {
        story: 'Disabled button state. The button cannot be clicked and appears grayed out.'
      }
    }
  }
};

export const DisabledSecondary = {
  args: {
    disabled: true,
    variant: 'secondary',
    children: 'Disabled Secondary',
  },
  parameters: {
    docs: {
      description: {
        story: 'Disabled secondary button showing how disabled state affects different variants.'
      }
    }
  }
};

// Custom Color Stories
export const CustomColors = {
  args: {
    backgroundColor: '#ff6b6b',
    textColor: '#ffffff',
    children: 'Custom Red Button',
  },
  parameters: {
    docs: {
      description: {
        story: 'Button with custom background and text colors. Perfect for brand-specific styling.'
      }
    }
  }
};

export const CustomColorsOutline = {
  args: {
    variant: 'outline',
    backgroundColor: '#4ecdc4',
    textColor: '#ffffff',
    children: 'Custom Teal Outline',
  },
  parameters: {
    docs: {
      description: {
        story: 'Outline button with custom colors. The background color is used for the border and text.'
      }
    }
  }
};
// Interactive Stories
export const WithClickHandler = {
  args: {
    children: 'Click Me!',
    onClick: () => alert('Button was clicked!'),
  },
  parameters: {
    docs: {
      description: {
        story: 'Button with a click handler that shows an alert. Click to test the interaction.'
      }
    }
  }
};

// Combination Stories
export const AllSizesPrimary = () => (
  <div style={{ display: 'flex', gap: '10px', alignItems: 'center', flexWrap: 'wrap' }}>
    <Button size="small" variant="primary">Small Primary</Button>
    <Button size="medium" variant="primary">Medium Primary</Button>
    <Button size="large" variant="primary">Large Primary</Button>
  </div>
);

export const AllVariantsMedium = () => (
  <div style={{ display: 'flex', gap: '10px', alignItems: 'center', flexWrap: 'wrap' }}>
    <Button variant="primary">Primary</Button>
    <Button variant="secondary">Secondary</Button>
    <Button variant="outline">Outline</Button>
  </div>
);

export const ResponsiveExample = () => (
  <div style={{ maxWidth: '300px', padding: '20px', border: '1px solid #ddd', borderRadius: '8px' }}>
    <h4 style={{ margin: '0 0 15px 0' }}>Responsive Button Layout</h4>
    <p style={{ fontSize: '14px', color: '#666', margin: '0 0 15px 0' }}>
      On mobile devices (≤768px), buttons will take full width and stack vertically.
    </p>
    <Button size="large" backgroundColor="#28a745">
      Full Width on Mobile
    </Button>
  </div>
);