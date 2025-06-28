export interface RadioButtonProps {
  /**
   * The label text for the radio button
   */
  label: string;
  
  /**
   * The value of the radio button
   */
  value: string;
  
  /**
   * Whether the radio button is checked
   */
  checked?: boolean;
  
  /**
   * Whether the radio button is disabled
   */
  disabled?: boolean;
  
  /**
   * The name attribute for grouping radio buttons
   */
  name: string;
  
  /**
   * The size of the radio button
   */
  size?: 'small' | 'medium' | 'large';
  
  /**
   * The color of the radio button when checked
   */
  color?: string;
  
  /**
   * The text color of the label
   */
  textColor?: string;
  
  /**
   * Change handler for the radio button
   */
  onChange?: (value: string) => void;
  
  /**
   * Additional CSS class names
   */
  className?: string;
}
