export interface TextProps {
  /**
   * The content to display inside the text element
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
   * The background color of the text
   */
  backgroundColor?: string;
  
  /**
   * The size of the text
   */
  size?: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge';
  
  /**
   * The font weight of the text
   */
  weight?: 'light' | 'normal' | 'medium' | 'semibold' | 'bold';
  
  /**
   * The HTML element to render
   */
  as?: 'p' | 'span' | 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  
  /**
   * Text alignment
   */
  align?: 'left' | 'center' | 'right' | 'justify';
  
  /**
   * Whether the text is italic
   */
  italic?: boolean;
  
  /**
   * Whether the text is underlined
   */
  underline?: boolean;
  
  /**
   * Click handler for the text
   */
  onClick?: () => void;
  
  /**
   * Additional CSS class names
   */
  className?: string;
  
  /**
   * Additional inline styles
   */
  style?: React.CSSProperties;
}
