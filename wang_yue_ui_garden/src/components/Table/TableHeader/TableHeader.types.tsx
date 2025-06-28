export interface TableHeaderProps {
  /**
   * The content to display inside the table header (TableRow components)
   */
  children: React.ReactNode;
  
  /**
   * Whether the table header is disabled
   */
  disabled?: boolean;
  
  /**
   * The background color of the header
   */
  backgroundColor?: string;
  
  /**
   * The text color of the header
   */
  textColor?: string;
  
  /**
   * Additional CSS class names
   */
  className?: string;
}
