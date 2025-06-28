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
   * The variant of the label
   */
  variant?: 'default' | 'required' | 'optional';
  
  /**
   * HTML for attribute to associate with form element
   */
  htmlFor?: string;
  
  /**
   * Additional CSS class names
   */
  className?: string;
}
