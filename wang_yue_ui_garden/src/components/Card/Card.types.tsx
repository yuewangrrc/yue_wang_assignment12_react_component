export interface CardProps {
  /**
   * The content to display inside the card
   */
  children: React.ReactNode;
  
  /**
   * Whether the card is disabled
   */
  disabled?: boolean;
  
  /**
   * The background color of the card
   */
  backgroundColor?: string;
  
  /**
   * The border color of the card
   */
  borderColor?: string;
  
  /**
   * Whether the card has a shadow
   */
  shadow?: boolean;
  
  /**
   * Whether the card is hoverable
   */
  hoverable?: boolean;
  
  /**
   * The padding inside the card
   */
  padding?: 'small' | 'medium' | 'large';
  
  /**
   * Click handler for the card
   */
  onClick?: () => void;
  
  /**
   * Additional CSS class names
   */
  className?: string;
}
