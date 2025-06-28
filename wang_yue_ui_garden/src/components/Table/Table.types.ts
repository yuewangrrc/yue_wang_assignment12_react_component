export interface TableProps {
  /**
   * The content to display inside the table
   */
  children: React.ReactNode;
  
  /**
   * Whether the table is disabled
   */
  disabled?: boolean;
  
  /**
   * The background color of the table
   */
  backgroundColor?: string;
  
  /**
   * Additional CSS class names
   */
  className?: string;
}
