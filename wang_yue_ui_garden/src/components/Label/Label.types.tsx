export interface LabelProps {
  /**
   * The content to display inside the label
   */
  children: React.ReactNode;
  
  /**
   * Whether the label is disabled
   */
  disabled?: boolean;
  
  /**
   * The background color of the label
   */
  backgroundColor?: string;
  
  /**
   * The text color of the label
   */
  textColor?: string;
  
  /**
   * The size of the label
   */
  size?: 'small' | 'medium' | 'large';
  
  /**
   * The variant/style of the label
   */
  variant?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  
  /**
   * Click handler for the label
   */
  onClick?: () => void;
  
  /**
   * Additional CSS class names
   */
  className?: string;
  
  /**
   * The HTML element to render for the label
   */
  htmlFor?: string;
  
  /**
   * Whether the label is required (shows asterisk)
   */
  required?: boolean;
}
