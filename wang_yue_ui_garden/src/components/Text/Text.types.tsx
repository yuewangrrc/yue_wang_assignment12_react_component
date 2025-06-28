export interface TextProps {
  /**
   * The content to display
   */
  children: React.ReactNode;
  
  /**
   * Whether the text is disabled
   */
  disabled?: boolean;
  
  /**
   * The text color
   */
  color?: string;
  
  /**
   * The background color
   */
  backgroundColor?: string;
  
  /**
   * The size of the text
   */
  size?: 'small' | 'medium' | 'large' | 'xlarge';
  
  /**
   * The weight of the text
   */
  weight?: 'normal' | 'bold' | 'light';
  
  /**
   * The alignment of the text
   */
  align?: 'left' | 'center' | 'right' | 'justify';
  
  /**
   * HTML element to render as
   */
  as?: 'p' | 'span' | 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  
  /**
   * Additional CSS class names
   */
  className?: string;
  
  /**
   * Inline styles
   */
  style?: React.CSSProperties;
}
