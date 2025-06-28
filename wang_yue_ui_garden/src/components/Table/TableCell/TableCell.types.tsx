export interface TableCellProps {
  /**
   * The content to display inside the table cell
   */
  children: React.ReactNode;
  
  /**
   * Whether the table cell is disabled
   */
  disabled?: boolean;
  
  /**
   * The background color of the cell
   */
  backgroundColor?: string;
  
  /**
   * The text color of the cell
   */
  textColor?: string;
  
  /**
   * The padding size of the cell
   */
  padding?: 'small' | 'medium' | 'large';
  
  /**
   * Text alignment within the cell
   */
  align?: 'left' | 'center' | 'right';
  
  /**
   * Whether this is a header cell
   */
  isHeader?: boolean;
  
  /**
   * Click handler for the cell
   */
  onClick?: () => void;
  
  /**
   * Additional CSS class names
   */
  className?: string;
  
  /**
   * Column span for the cell
   */
  colSpan?: number;
  
  /**
   * Row span for the cell
   */
  rowSpan?: number;
}
