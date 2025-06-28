import React from 'react';
import Card from './Card';
import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';

// Storybook Meta configuration
const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A flexible card component with customizable padding, colors, shadows, and interactive states. Perfect for content containers and interactive elements.'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
      description: 'Card content'
    },
    backgroundColor: { 
      control: 'color',
      description: 'Background color of the card'
    },
    borderColor: { 
      control: 'color',
      description: 'Border color of the card'
    },
    textColor: {
      control: 'color',
      description: 'Text color of the card'
    },
    shadow: {
      control: 'boolean',
      description: 'Whether the card has a shadow'
    },
    hoverable: {
      control: 'boolean',
      description: 'Whether the card has hover effects'
    },
    padding: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: 'Padding inside the card'
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the card is disabled'
    },
    onClick: {
      action: 'card-clicked',
      description: 'Function called when card is clicked'
    }
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Basic Stories
export const Default: Story = {
  args: {
    children: 'This is a default card with medium padding and shadow.',
    padding: 'medium',
    shadow: true,
    hoverable: false,
    disabled: false,
    onClick: action('card-clicked'),
  },
};

// export const Disabled: Story = {
//   args: {
//     children: 'This card is disabled with grayed out appearance.',
//     disabled: true,
//     padding: 'medium',
//     shadow: true,
//     onClick: action('card-clicked'),
//   },
// };

export const Small: Story = {
  args: {
    children: 'Small card with minimal padding',
    padding: 'small',
    shadow: true,
    onClick: action('card-clicked'),
  },
};

export const Large: Story = {
  args: {
    children: 'Large card with generous padding for spacious content',
    padding: 'large',
    shadow: true,
    onClick: action('card-clicked'),
  },
};

export const Hoverable: Story = {
  args: {
    children: 'Hover over this card to see the interactive effects!',
    hoverable: true,
    padding: 'medium',
    shadow: true,
    onClick: action('card-clicked'),
  },
};

export const WithoutShadow: Story = {
  args: {
    children: 'This card has no shadow for a flatter design.',
    shadow: false,
    padding: 'medium',
    onClick: action('card-clicked'),
  },
};

// export const CustomColors: Story = {
//   args: {
//     children: 'Card with custom colors',
//     backgroundColor: '#f0f8ff',
//     borderColor: '#4299e1',
//     textColor: '#2d3748',
//     padding: 'medium',
//     shadow: true,
//     onClick: action('card-clicked'),
//   },
// };

export const InteractiveCard: Story = {
  args: {
    children: 'Click me! I have both hover effects and click functionality.',
    hoverable: true,
    padding: 'large',
    shadow: true,
    onClick: action('card-clicked'),
  },
};

export const ResponsiveDemo: Story = {
  args: {
    children: 'This card demonstrates responsive behavior. Resize your browser to see how it adapts to different screen sizes.',
    padding: 'medium',
    shadow: true,
    hoverable: true,
    onClick: action('card-clicked'),
  },
  decorators: [
    (Story) => (
      <div style={{ width: '100%', maxWidth: '600px', padding: '20px' }}>
        <Story />
      </div>
    ),
  ],
};

export const HoverableAndClickable = {
  args: {
    hoverable: true,
    onClick: () => alert('Card clicked!'),
    children: 'I have both hover effects and click functionality!',
  },
  parameters: {
    docs: {
      description: {
        story: 'Card with both hover effects and click functionality.'
      }
    }
  }
};

// State Stories
export const Disabled = {
  args: {
    disabled: true,
    children: 'This card is disabled.',
  },
  parameters: {
    docs: {
      description: {
        story: 'Disabled card state with grayed out appearance and no interaction.'
      }
    }
  }
};

export const DisabledWithClick = {
  args: {
    disabled: true,
    onClick: () => alert('This should not trigger'),
    children: 'Disabled card with click handler (should not work)',
  },
  parameters: {
    docs: {
      description: {
        story: 'Disabled card with click handler - the click will not trigger.'
      }
    }
  }
};

// Custom Color Stories
export const CustomColors = {
  args: {
    backgroundColor: '#f0f8ff',
    borderColor: '#4299e1',
    children: 'Card with custom blue theme',
  },
  parameters: {
    docs: {
      description: {
        story: 'Card with custom background and border colors.'
      }
    }
  }
};

export const SuccessCard = {
  args: {
    backgroundColor: '#f0fff4',
    borderColor: '#48bb78',
    children: 'Success themed card',
  },
  parameters: {
    docs: {
      description: {
        story: 'Card with success theme colors (green).'
      }
    }
  }
};

export const WarningCard = {
  args: {
    backgroundColor: '#fffaf0',
    borderColor: '#ed8936',
    children: 'Warning themed card',
  },
  parameters: {
    docs: {
      description: {
        story: 'Card with warning theme colors (orange).'
      }
    }
  }
};

// Content Examples
export const ContentCard = () => (
  <Card padding="large" hoverable>
    <Text as="h3" size="large" weight="bold" style={{ marginTop: 0, marginBottom: '12px' }}>
      Card Title
    </Text>
    <Text style={{ marginBottom: '16px' }}>
      This is a card with structured content including a title, description, and action button.
    </Text>
    <Button size="small" variant="primary">
      Learn More
    </Button>
  </Card>
);

export const ProductCard = () => (
  <Card padding="medium" hoverable backgroundColor="#fff" borderColor="#e2e8f0">
    <div style={{ textAlign: 'center' }}>
      <div style={{ 
        width: '100px', 
        height: '100px', 
        backgroundColor: '#4299e1', 
        borderRadius: '8px', 
        margin: '0 auto 16px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontSize: '24px'
      }}>
        📦
      </div>
      <Text as="h3" size="medium" weight="bold" style={{ marginBottom: '8px' }}>
        Product Name
      </Text>
      <Text size="small" color="#666" style={{ marginBottom: '16px' }}>
        Product description goes here with key features and benefits.
      </Text>
      <Text size="large" weight="bold" color="#2d3748" style={{ marginBottom: '16px' }}>
        $99.99
      </Text>
      <Button size="medium" variant="primary">
        Add to Cart
      </Button>
    </div>
  </Card>
);

export const StatsCard = () => (
  <Card padding="large" backgroundColor="#1a202c" borderColor="#2d3748">
    <Text as="h3" size="medium" weight="bold" color="#fff" style={{ marginBottom: '8px' }}>
      Monthly Sales
    </Text>
    <Text size="xlarge" weight="bold" color="#4299e1" style={{ marginBottom: '4px' }}>
      $24,580
    </Text>
    <Text size="small" color="#a0aec0">
      +12% from last month
    </Text>
  </Card>
);

// Layout Examples
export const CardGrid = () => (
  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', maxWidth: '800px' }}>
    <Card padding="medium" hoverable>
      <Text weight="bold">Card 1</Text>
      <Text size="small">First card content</Text>
    </Card>
    <Card padding="medium" hoverable>
      <Text weight="bold">Card 2</Text>
      <Text size="small">Second card content</Text>
    </Card>
    <Card padding="medium" hoverable>
      <Text weight="bold">Card 3</Text>
      <Text size="small">Third card content</Text>
    </Card>
  </div>
);

export const ResponsiveCard = () => (
  <div style={{ maxWidth: '400px' }}>
    <Text as="h3" style={{ marginBottom: '16px' }}>Responsive Card Example</Text>
    <Card padding="large" hoverable>
      <Text weight="bold" style={{ marginBottom: '12px' }}>
        Responsive Design
      </Text>
      <Text style={{ marginBottom: '16px' }}>
        This card adapts to different screen sizes. On mobile devices (≤768px), 
        it will take full width and have bottom margin for stacking.
      </Text>
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
        <Button size="small" variant="primary">Primary</Button>
        <Button size="small" variant="outline">Secondary</Button>
      </div>
    </Card>
  </div>
);

export const AllPaddingSizes = () => (
  <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
    <Card padding="small">
      <Text weight="bold">Small</Text>
      <Text size="small">12px padding</Text>
    </Card>
    <Card padding="medium">
      <Text weight="bold">Medium</Text>
      <Text size="small">16px padding</Text>
    </Card>
    <Card padding="large">
      <Text weight="bold">Large</Text>
      <Text size="small">24px padding</Text>
    </Card>
  </div>
);
