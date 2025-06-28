export interface DropdownOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface DropdownProps {
  /**
   * Array of options to display in the dropdown
   */
  options: DropdownOption[];
  
  /**
   * The currently selected value
   */
  value?: string;
  
  /**
   * Placeholder text when no option is selected
   */
  placeholder?: string;
  
  /**
   * Whether the dropdown is disabled
   */
  disabled?: boolean;
  
  /**
   * The background color of the dropdown
   */
  backgroundColor?: string;
  
  /**
   * The text color of the dropdown
   */
  textColor?: string;
  
  /**
   * The size of the dropdown
   */
  size?: 'small' | 'medium' | 'large';
  
  /**
   * Callback function when selection changes
   */
  onChange?: (value: string) => void;
  
  /**
   * Additional CSS class names
   */
  className?: string;
  
  /**
   * Whether the dropdown should take full width
   */
  fullWidth?: boolean;
}
