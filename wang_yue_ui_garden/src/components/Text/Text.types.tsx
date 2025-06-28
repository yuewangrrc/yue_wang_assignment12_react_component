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
  size?: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge';
  
  /**
   * The weight of the text
   */
  weight?: 'light' | 'normal' | 'medium' | 'semibold' | 'bold';
  
  /**
   * The alignment of the text
   */
  align?: 'left' | 'center' | 'right' | 'justify';
  
  /**
   * HTML element to render as
   */
  as?: 'p' | 'span' | 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  
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
   * Inline styles
   */
  style?: React.CSSProperties;
}
