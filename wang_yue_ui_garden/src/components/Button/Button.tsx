import React from 'react';
import styled from 'styled-components';
import { ButtonProps } from './Button.types';

const StyledButton = styled.button<ButtonProps>`
  padding: ${props => 
    props.size === 'small' ? '4px 8px' : 
    props.size === 'large' ? '12px 24px' : 
    '8px 16px'
  };
  
  background-color: ${props => {
    if (props.disabled) return '#e9ecef';
    if (props.backgroundColor) return props.backgroundColor;
    if (props.variant === 'primary') return '#0066cc';
    if (props.variant === 'secondary') return '#6c757d';
    if (props.variant === 'outline') return 'transparent';
    return '#0066cc';
  }};
  
  color: ${props => {
    if (props.disabled) return '#6c757d';
    if (props.textColor) return props.textColor;
    if (props.variant === 'outline') return '#0066cc';
    return 'white';
  }};
  
  border: ${props => {
    if (props.variant === 'outline') return '2px solid #0066cc';
    return 'none';
  }};
  
  border-radius: 4px;
  
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  
  opacity: ${props => props.disabled ? 0.6 : 1};
  
  font-size: ${props => 
    props.size === 'small' ? '12px' : 
    props.size === 'large' ? '18px' : 
    '14px'
  };
  
  transition: all 0.2s ease-in-out;
  
  &:hover:not(:disabled) {
    transform: translateY(-1px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
  
  &:active:not(:disabled) {
    transform: translateY(0);
  }
  
  /* Responsive design */
  @media (max-width: 768px) {
    padding: ${props => 
      props.size === 'small' ? '6px 12px' : 
      props.size === 'large' ? '14px 28px' : 
      '10px 20px'
    };
    
    font-size: ${props => 
      props.size === 'small' ? '14px' : 
      props.size === 'large' ? '20px' : 
      '16px'
    };
  }
  
  @media (max-width: 480px) {
    width: 100%;
    margin: 2px 0;
  }
`;

const Button: React.FC<ButtonProps> = ({  
  children, 
  variant = 'primary', 
  size = 'medium',
  disabled = false,
  backgroundColor,
  textColor,
  onClick,
  className,
  type = 'button'
}) => {
  return (
    <StyledButton 
      variant={variant}
      size={size}
      disabled={disabled}
      backgroundColor={backgroundColor}
      textColor={textColor}
      onClick={disabled ? undefined : onClick}
      className={className}
      type={type}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
