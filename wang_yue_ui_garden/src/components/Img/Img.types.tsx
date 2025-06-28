export interface ImgProps {
  /**
   * The source URL of the image
   */
  src: string;
  
  /**
   * Alternative text for the image
   */
  alt: string;
  
  /**
   * Whether the image is disabled
   */
  disabled?: boolean;
  
  /**
   * The width of the image
   */
  width?: string | number;
  
  /**
   * The height of the image
   */
  height?: string | number;
  
  /**
   * Border color of the image
   */
  borderColor?: string;
  
  /**
   * Border radius of the image
   */
  borderRadius?: string;
  
  /**
   * Object fit property for the image
   */
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
  
  /**
   * Click handler for the image
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
  
  /**
   * Whether to show loading placeholder
   */
  showLoading?: boolean;
}
