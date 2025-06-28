export interface ButtonProps {
  /**
   * The content to display inside the button
   */
  children: React.ReactNode;
  
  /**
   * Whether the button is disabled
   */
  disabled?: boolean;
  
  /**
   * The background color of the button
   */
  backgroundColor?: string;
  
  /**
   * The text color of the button
   */
  textColor?: string;
  
  /**
   * The size of the button
   */
  size?: 'small' | 'medium' | 'large';
  
  /**
   * The variant of the button
   */
  variant?: 'primary' | 'secondary' | 'outline';
  
  /**
   * Click handler for the button
   */
  onClick?: () => void;
  
  /**
   * Additional CSS class names
   */
  className?: string;
  
  /**
   * Button type
   */
  type?: 'button' | 'submit' | 'reset';
}
