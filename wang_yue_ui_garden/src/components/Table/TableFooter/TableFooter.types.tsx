export interface TableFooterProps {
  /**
   * The content to display inside the table footer (TableRow components)
   */
  children: React.ReactNode;
  
  /**
   * Whether the table footer is disabled
   */
  disabled?: boolean;
  
  /**
   * The background color of the footer
   */
  backgroundColor?: string;
  
  /**
   * The text color of the footer
   */
  textColor?: string;
  
  /**
   * Additional CSS class names
   */
  className?: string;
}
