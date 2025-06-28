import React from 'react';
import styled from 'styled-components';
import { CardProps } from './Card.types';

const StyledCard = styled.div<CardProps>`
  padding: ${props => 
    props.padding === 'small' ? '12px' : 
    props.padding === 'large' ? '24px' : 
    '16px'
  };
  
  background-color: ${props => {
    if (props.disabled) return '#f8f9fa';
    return props.backgroundColor || '#ffffff';
  }};
  
  color: ${props => {
    if (props.disabled) return '#6c757d';
    return props.textColor || '#333333';
  }};
  
  border: 1px solid ${props => {
    if (props.disabled) return '#e9ecef';
    return props.borderColor || '#dee2e6';
  }};
  
  border-radius: 8px;
  
  cursor: ${props => {
    if (props.disabled) return 'not-allowed';
    if (props.onClick) return 'pointer';
    return 'default';
  }};
  
  opacity: ${props => props.disabled ? 0.6 : 1};
  
  box-shadow: ${props => {
    if (!props.shadow) return 'none';
    if (props.disabled) return '0 1px 3px rgba(0, 0, 0, 0.1)';
    return '0 2px 4px rgba(0, 0, 0, 0.1)';
  }};
  
  transition: all 0.2s ease-in-out;
  
  ${props => props.hoverable && !props.disabled && `
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
    }
  `}
  
  ${props => props.onClick && !props.disabled && `
    &:active {
      transform: translateY(0);
    }
  `}
  
  /* Responsive design */
  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 16px;
    
    padding: ${props => 
      props.padding === 'small' ? '16px' : 
      props.padding === 'large' ? '28px' : 
      '20px'
    };
  }
  
  @media (max-width: 480px) {
    border-radius: 6px;
    
    padding: ${props => 
      props.padding === 'small' ? '12px' : 
      props.padding === 'large' ? '24px' : 
      '16px'
    };
    
    box-shadow: ${props => {
      if (!props.shadow) return 'none';
      return '0 1px 3px rgba(0, 0, 0, 0.1)';
    }};
  }
`;

const Card: React.FC<CardProps> = ({
  children,
  disabled = false,
  backgroundColor,
  borderColor,
  textColor,
  padding = 'medium',
  shadow = true,
  hoverable = false,
  onClick,
  className
}) => {
  const handleClick = () => {
    if (!disabled && onClick) {
      onClick();
    }
  };

  return (
    <StyledCard
      disabled={disabled}
      backgroundColor={backgroundColor}
      borderColor={borderColor}
      textColor={textColor}
      padding={padding}
      shadow={shadow}
      hoverable={hoverable}
      onClick={handleClick}
      className={className}
    >
      {children}
    </StyledCard>
  );
};

export default Card;
