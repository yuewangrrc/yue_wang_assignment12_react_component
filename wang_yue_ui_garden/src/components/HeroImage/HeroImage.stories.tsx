import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import HeroImage from './HeroImage';

const meta: Meta<typeof HeroImage> = {
  title: 'Components/HeroImage',
  component: HeroImage,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    src: {
      control: { type: 'text' },
      description: 'Source URL of the hero image',
    },
    alt: {
      control: { type: 'text' },
      description: 'Alternative text for the image',
    },
    height: {
      control: { type: 'text' },
      description: 'Height of the hero image',
    },
    width: {
      control: { type: 'text' },
      description: 'Width of the hero image',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the hero image is disabled',
    },
    overlayColor: {
      control: { type: 'color' },
      description: 'Background color for the overlay',
    },
    textColor: {
      control: { type: 'color' },
      description: 'Text color for the overlay content',
    },
    objectFit: {
      control: { type: 'select' },
      options: ['cover', 'contain', 'fill', 'none', 'scale-down'],
      description: 'Object fit property for the image',
    },
    loading: {
      control: { type: 'select' },
      options: ['lazy', 'eager'],
      description: 'Loading behavior for the image',
    },
    onClick: {
      action: 'hero-image-clicked',
      description: 'Click handler for the hero image',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    alt: 'Beautiful mountain landscape',
    height: '400px',
    onClick: action('hero-image-clicked'),
  },
};

export const Disabled: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    alt: 'Disabled hero image',
    height: '400px',
    disabled: true,
    onClick: action('hero-image-clicked'),
  },
};

export const WithOverlay: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    alt: 'Hero image with overlay',
    height: '400px',
    overlay: (
      <div>
        <h1 style={{ margin: '0 0 16px 0', fontSize: '2.5rem' }}>Welcome to Our Site</h1>
        <p style={{ margin: '0', fontSize: '1.2rem' }}>Discover amazing content and experiences</p>
      </div>
    ),
    onClick: action('hero-image-clicked'),
  },
};

export const CustomSize: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    alt: 'Custom sized hero image',
    height: '300px',
    width: '600px',
    onClick: action('hero-image-clicked'),
  },
};

export const CustomColors: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    alt: 'Hero image with custom overlay colors',
    height: '400px',
    overlay: <h2 style={{ margin: 0 }}>Custom Overlay</h2>,
    overlayColor: 'rgba(255, 0, 0, 0.5)',
    textColor: '#ffffff',
    onClick: action('hero-image-clicked'),
  },
};

export const ObjectFitContain: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    alt: 'Hero image with contain object fit',
    height: '400px',
    objectFit: 'contain',
    onClick: action('hero-image-clicked'),
  },
};

export const SmallSize: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    alt: 'Small hero image',
    height: '200px',
    width: '400px',
    onClick: action('hero-image-clicked'),
  },
};

export const LargeSize: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    alt: 'Large hero image',
    height: '600px',
    onClick: action('hero-image-clicked'),
  },
};
