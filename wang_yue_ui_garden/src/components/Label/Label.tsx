import React from 'react';
import styled from 'styled-components';
import { LabelProps } from './Label.types';

const StyledLabel = styled.label<LabelProps>`
  display: inline-block;
  
  padding: ${props => 
    props.size === 'small' ? '4px 8px' : 
    props.size === 'large' ? '12px 16px' : 
    '8px 12px'
  };
  
  font-size: ${props => 
    props.size === 'small' ? '12px' : 
    props.size === 'large' ? '16px' : 
    '14px'
  };
  
  font-weight: 500;
  
  background-color: ${props => {
    if (props.disabled) return '#f8f9fa';
    if (props.backgroundColor) return props.backgroundColor;
    
    switch (props.variant) {
      case 'primary': return '#0066cc';
      case 'secondary': return '#6c757d';
      case 'success': return '#28a745';
      case 'warning': return '#ffc107';
      case 'danger': return '#dc3545';
      default: return '#e9ecef';
    }
  }};
  
  color: ${props => {
    if (props.disabled) return '#6c757d';
    if (props.textColor) return props.textColor;
    
    switch (props.variant) {
      case 'primary':
      case 'secondary':
      case 'success':
      case 'danger':
        return '#ffffff';
      case 'warning':
        return '#212529';
      default:
        return '#495057';
    }
  }};
  
  border: 1px solid ${props => {
    if (props.disabled) return '#e9ecef';
    
    switch (props.variant) {
      case 'primary': return '#0066cc';
      case 'secondary': return '#6c757d';
      case 'success': return '#28a745';
      case 'warning': return '#ffc107';
      case 'danger': return '#dc3545';
      default: return '#dee2e6';
    }
  }};
  
  border-radius: 4px;
  
  cursor: ${props => {
    if (props.disabled) return 'not-allowed';
    if (props.onClick || props.htmlFor) return 'pointer';
    return 'default';
  }};
  
  opacity: ${props => props.disabled ? 0.6 : 1};
  
  transition: all 0.2s ease-in-out;
  
  &:hover:not(:disabled) {
    transform: ${props => props.onClick ? 'translateY(-1px)' : 'none'};
    box-shadow: ${props => props.onClick ? '0 2px 4px rgba(0, 0, 0, 0.1)' : 'none'};
  }
  
  &:active:not(:disabled) {
    transform: translateY(0);
  }
  
  /* Responsive design */
  @media (max-width: 768px) {
    padding: ${props => 
      props.size === 'small' ? '6px 10px' : 
      props.size === 'large' ? '14px 18px' : 
      '10px 14px'
    };
    
    font-size: ${props => 
      props.size === 'small' ? '14px' : 
      props.size === 'large' ? '18px' : 
      '16px'
    };
  }
  
  @media (max-width: 480px) {
    width: 100%;
    text-align: center;
    margin: 2px 0;
  }
`;

const RequiredAsterisk = styled.span`
  color: #dc3545;
  margin-left: 4px;
`;

const Label: React.FC<LabelProps> = ({
  children,
  disabled = false,
  backgroundColor,
  textColor,
  size = 'medium',
  variant = 'default',
  onClick,
  className,
  htmlFor,
  required = false
}) => {
  const handleClick = () => {
    if (!disabled && onClick) {
      onClick();
    }
  };

  return (
    <StyledLabel
      disabled={disabled}
      backgroundColor={backgroundColor}
      textColor={textColor}
      size={size}
      variant={variant}
      onClick={handleClick}
      className={className}
      htmlFor={htmlFor}
    >
      {children}
      {required && <RequiredAsterisk>*</RequiredAsterisk>}
    </StyledLabel>
  );
};

export default Label;
