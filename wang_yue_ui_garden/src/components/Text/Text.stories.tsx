import React from 'react';
import { action } from '@storybook/addon-actions';
import Text  from './Text';

// Storybook Meta configuration
const meta = {
  title: 'Components/Text',
  component: Text,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: { type: 'text' },
      description: 'Content to display inside the text element',
    },
    size: {
      control: { type: 'select' },
      options: ['xsmall', 'small', 'medium', 'large', 'xlarge'],
      description: 'Size of the text',
    },
    weight: {
      control: { type: 'select' },
      options: ['light', 'normal', 'medium', 'semibold', 'bold'],
      description: 'Font weight of the text',
    },
    as: {
      control: { type: 'select' },
      options: ['p', 'span', 'div', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      description: 'HTML element to render',
    },
    align: {
      control: { type: 'select' },
      options: ['left', 'center', 'right', 'justify'],
      description: 'Text alignment',
    },
    color: {
      control: { type: 'color' },
      description: 'Text color',
    },
    backgroundColor: {
      control: { type: 'color' },
      description: 'Background color of the text',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the text is disabled',
    },
    italic: {
      control: { type: 'boolean' },
      description: 'Whether the text is italic',
    },
    underline: {
      control: { type: 'boolean' },
      description: 'Whether the text is underlined',
    },
    onClick: {
      action: 'text-clicked',
      description: 'Click handler for the text',
    },
  },
};

export default meta;

// Basic Stories
export const Default = {
  args: {
    children: 'This is default text content.',
    size: 'medium',
    weight: 'normal',
    as: 'p',
    onClick: action('text-clicked'),
  },
  parameters: {
    docs: {
      description: {
        story: 'Basic text with default styling.'
      }
    }
  }
};

export const Disabled = {
  args: {
    children: 'This text is disabled.',
    disabled: true,
    onClick: action('text-clicked'),
  },
  parameters: {
    docs: {
      description: {
        story: 'Disabled text state with grayed out appearance.'
      }
    }
  }
};

// Heading Stories
export const Heading1 = {
  args: {
    children: 'This is a Heading 1',
    as: 'h1',
    size: 'xlarge',
    weight: 'bold',
    onClick: action('text-clicked'),
  },
  parameters: {
    docs: {
      description: {
        story: 'Text rendered as an H1 heading element.'
      }
    }
  }
};

export const Heading2 = {
  args: {
    children: 'This is a Heading 2',
    as: 'h2',
    size: 'large',
    weight: 'semibold',
    onClick: action('text-clicked'),
  },
  parameters: {
    docs: {
      description: {
        story: 'Text rendered as an H2 heading element.'
      }
    }
  }
};

// Size Stories
export const SmallText = {
  args: {
    children: 'This is small text',
    size: 'small',
    weight: 'light',
    onClick: action('text-clicked'),
  },
  parameters: {
    docs: {
      description: {
        story: 'Small text size for secondary information.'
      }
    }
  }
};

export const MediumText = {
  args: {
    children: 'This is medium text',
    size: 'medium',
    weight: 'normal',
    onClick: action('text-clicked'),
  },
  parameters: {
    docs: {
      description: {
        story: 'Medium text size (default) for body content.'
      }
    }
  }
};

export const LargeText = {
  args: {
    children: 'This is large text',
    size: 'large',
    weight: 'medium',
    onClick: action('text-clicked'),
  },
  parameters: {
    docs: {
      description: {
        story: 'Large text size for emphasis or subheadings.'
      }
    }
  }
};

export const ExtraLarge = {
  args: {
    children: 'This is extra large text',
    size: 'xlarge',
    weight: 'bold',
    onClick: action('text-clicked'),
  },
  parameters: {
    docs: {
      description: {
        story: 'Extra large text size for headings.'
      }
    }
  }
};

// Weight Stories
export const Light = {
  args: {
    children: 'This is light weight text.',
    weight: 'light',
    onClick: action('text-clicked'),
  },
  parameters: {
    docs: {
      description: {
        story: 'Light font weight for subtle text.'
      }
    }
  }
};

export const Normal = {
  args: {
    children: 'This is normal weight text.',
    weight: 'normal',
    onClick: action('text-clicked'),
  },
  parameters: {
    docs: {
      description: {
        story: 'Normal font weight (default) for body text.'
      }
    }
  }
};

export const MediumWeight = {
  args: {
    children: 'This is medium weight text.',
    weight: 'medium',
    onClick: action('text-clicked'),
  },
  parameters: {
    docs: {
      description: {
        story: 'Medium font weight for slightly emphasized text.'
      }
    }
  }
};

export const Semibold = {
  args: {
    children: 'This is semibold weight text.',
    weight: 'semibold',
    onClick: action('text-clicked'),
  },
  parameters: {
    docs: {
      description: {
        story: 'Semibold font weight for emphasis.'
      }
    }
  }
};

export const Bold = {
  args: {
    children: 'This is bold weight text.',
    weight: 'bold',
    onClick: action('text-clicked'),
  },
  parameters: {
    docs: {
      description: {
        story: 'Bold font weight for emphasis.'
      }
    }
  }
};

// Alignment Stories
export const LeftAligned = {
  args: {
    children: 'This text is left aligned.',
    align: 'left',
    onClick: action('text-clicked'),
  },
  parameters: {
    docs: {
      description: {
        story: 'Left-aligned text (default).'
      }
    }
  }
};

export const CenterAligned = {
  args: {
    children: 'This text is center aligned.',
    align: 'center',
    onClick: action('text-clicked'),
  },
  parameters: {
    docs: {
      description: {
        story: 'Center-aligned text.'
      }
    }
  }
};

export const RightAligned = {
  args: {
    children: 'This text is right aligned.',
    align: 'right',
    onClick: action('text-clicked'),
  },
  parameters: {
    docs: {
      description: {
        story: 'Right-aligned text.'
      }
    }
  }
};

export const Justified = {
  args: {
    children: 'This text is justified. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    align: 'justify',
    onClick: action('text-clicked'),
  },
  parameters: {
    docs: {
      description: {
        story: 'Justified text alignment.'
      }
    }
  }
};

// HTML Element Stories
export const AsSpan = {
  args: {
    children: 'This renders as a span element',
    as: 'span',
    onClick: action('text-clicked'),
  },
  parameters: {
    docs: {
      description: {
        story: 'Text rendered as a span element for inline content.'
      }
    }
  }
};

// Color Stories
export const CustomColors = {
  args: {
    children: 'This text has custom colors',
    color: '#ffffff',
    backgroundColor: '#007bff',
    weight: 'semibold',
    onClick: action('text-clicked'),
  },
  parameters: {
    docs: {
      description: {
        story: 'Text with custom text and background colors.'
      }
    }
  }
};

export const ColoredText = {
  args: {
    children: 'Colored bold text',
    color: '#d53f8c',
    weight: 'bold',
    onClick: action('text-clicked'),
  },
  parameters: {
    docs: {
      description: {
        story: 'Text with custom color and bold weight.'
      }
    }
  }
};

export const ClickableText = {
  args: {
    children: 'Click me! I am interactive text.',
    color: '#007bff',
    underline: true,
    onClick: action('text-clicked'),
  },
};

// Combination Examples
export const TypographyScale = () => (
  <div style={{ maxWidth: '500px' }}>
    <Text as="h1" size="xlarge" weight="bold">Main Heading (H1)</Text>
    <Text as="h2" size="large" weight="bold">Sub Heading (H2)</Text>
    <Text as="h3" size="medium" weight="bold">Section Heading (H3)</Text>
    <Text as="p" size="medium">This is a paragraph of body text with normal weight and medium size.</Text>
    <Text as="p" size="small" color="#666">This is smaller secondary text in a muted color.</Text>
  </div>
);

export const ContentExample = () => (
  <div style={{ maxWidth: '600px', padding: '20px', border: '1px solid #e2e8f0', borderRadius: '8px' }}>
    <Text as="h2" size="large" weight="bold" align="center" color="#2d3748">
      Article Title
    </Text>
    <Text size="small" align="center" color="#718096" style={{ marginBottom: '20px' }}>
      Published on June 27, 2025
    </Text>
    <Text as="p" size="medium" align="justify">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
      exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </Text>
    <Text as="p" size="medium" align="justify">
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
      fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
      culpa qui officia deserunt mollit anim id est laborum.
    </Text>
  </div>
);

export const AllSizes = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
    <Text size="xsmall">Extra Small Text (10px)</Text>
    <Text size="small">Small Text (12px)</Text>
    <Text size="medium">Medium Text (14px)</Text>
    <Text size="large">Large Text (16px)</Text>
    <Text size="xlarge">Extra Large Text (18px)</Text>
  </div>
);

export const AllWeights = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
    <Text weight="light">Light Weight (300)</Text>
    <Text weight="normal">Normal Weight (400)</Text>
    <Text weight="medium">Medium Weight (500)</Text>
    <Text weight="semibold">Semibold Weight (600)</Text>
    <Text weight="bold">Bold Weight (700)</Text>
  </div>
);
