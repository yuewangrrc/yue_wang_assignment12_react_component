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
   * The text color of the card
   */
  textColor?: string;
  
  /**
   * The padding size of the card
   */
  padding?: 'small' | 'medium' | 'large';
  
  /**
   * Whether the card has a shadow
   */
  shadow?: boolean;
  
  /**
   * Whether the card has hover effects
   */
  hoverable?: boolean;
  
  /**
   * Click handler for the card
   */
  onClick?: () => void;
  
  /**
   * Additional CSS class names
   */
  className?: string;
}
