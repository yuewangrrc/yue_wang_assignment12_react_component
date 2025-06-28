export interface HeroImageProps {
  /**
   * The source URL of the hero image
   */
  src: string;
  
  /**
   * Alternative text for the image
   */
  alt: string;
  
  /**
   * Whether the hero image is disabled
   */
  disabled?: boolean;
  
  /**
   * The height of the hero image
   */
  height?: string;
  
  /**
   * The width of the hero image
   */
  width?: string;
  
  /**
   * Overlay content to display on top of the image
   */
  overlay?: React.ReactNode;
  
  /**
   * Background color for the overlay
   */
  overlayColor?: string;
  
  /**
   * Text color for the overlay content
   */
  textColor?: string;
  
  /**
   * Object fit property for the image
   */
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
  
  /**
   * Click handler for the hero image
   */
  onClick?: () => void;
  
  /**
   * Additional CSS class names
   */
  className?: string;
  
  /**
   * Loading state for the image
   */
  loading?: 'lazy' | 'eager';
}
