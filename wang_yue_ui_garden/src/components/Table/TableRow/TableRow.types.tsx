export interface TableRowProps {
  /**
   * The content to display inside the table row (TableCell components)
   */
  children: React.ReactNode;
  
  /**
   * Whether the table row is disabled
   */
  disabled?: boolean;
  
  /**
   * The background color of the row
   */
  backgroundColor?: string;
  
  /**
   * Whether this row should have alternating color
   */
  striped?: boolean;
  
  /**
   * Whether this row should be highlighted
   */
  highlighted?: boolean;
  
  /**
   * Click handler for the row
   */
  onClick?: () => void;
  
  /**
   * Additional CSS class names
   */
  className?: string;
}
