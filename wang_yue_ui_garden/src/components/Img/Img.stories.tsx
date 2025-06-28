import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Img from './Img';

const meta: Meta<typeof Img> = {
  title: 'Components/Img',
  component: Img,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    src: {
      control: { type: 'text' },
      description: 'Source URL of the image',
    },
    alt: {
      control: { type: 'text' },
      description: 'Alternative text for the image',
    },
    width: {
      control: { type: 'text' },
      description: 'Width of the image',
    },
    height: {
      control: { type: 'text' },
      description: 'Height of the image',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the image is disabled',
    },
    borderColor: {
      control: { type: 'color' },
      description: 'Border color of the image',
    },
    borderRadius: {
      control: { type: 'text' },
      description: 'Border radius of the image',
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
    showLoading: {
      control: { type: 'boolean' },
      description: 'Whether to show loading placeholder',
    },
    onClick: {
      action: 'image-clicked',
      description: 'Click handler for the image',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    alt: 'Sample image',
    width: '300px',
    height: '200px',
    onClick: action('image-clicked'),
  },
};

export const Disabled: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    alt: 'Disabled image',
    width: '300px',
    height: '200px',
    disabled: true,
    onClick: action('image-clicked'),
  },
};

export const WithBorder: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    alt: 'Image with border',
    width: '300px',
    height: '200px',
    borderColor: '#0066cc',
    borderRadius: '8px',
    onClick: action('image-clicked'),
  },
};

export const Circular: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    alt: 'Circular image',
    width: '200px',
    height: '200px',
    borderRadius: '50%',
    borderColor: '#28a745',
    onClick: action('image-clicked'),
  },
};

export const Small: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    alt: 'Small image',
    width: '150px',
    height: '100px',
    onClick: action('image-clicked'),
  },
};

export const Large: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    alt: 'Large image',
    width: '500px',
    height: '350px',
    onClick: action('image-clicked'),
  },
};

export const ObjectFitContain: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    alt: 'Image with contain object fit',
    width: '300px',
    height: '200px',
    objectFit: 'contain',
    borderColor: '#dee2e6',
    onClick: action('image-clicked'),
  },
};

export const Clickable: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    alt: 'Clickable image with hover effect',
    width: '300px',
    height: '200px',
    borderRadius: '8px',
    onClick: action('image-clicked'),
  },
};
