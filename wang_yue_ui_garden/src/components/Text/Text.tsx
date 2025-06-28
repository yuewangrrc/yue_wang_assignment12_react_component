import React from 'react';
import styled from 'styled-components';
import { TextProps } from './Text.types';

const StyledText = styled.div.withConfig({
  shouldForwardProp: (prop) => !prop.startsWith('$'),
})<TextProps & { $element: string }>`
  font-size: ${props => {
    switch (props.size) {
      case 'xsmall': return '10px';
      case 'small': return '12px';
      case 'medium': return '14px';
      case 'large': return '16px';
      case 'xlarge': return '18px';
      default: return '14px';
    }
  }};
  
  font-weight: ${props => {
    switch (props.weight) {
      case 'light': return '300';
      case 'normal': return '400';
      case 'medium': return '500';
      case 'semibold': return '600';
      case 'bold': return '700';
      default: return '400';
    }
  }};
  
  color: ${props => {
    if (props.disabled) return '#6c757d';
    return props.color || '#333333';
  }};
  
  background-color: ${props => {
    if (props.disabled) return 'transparent';
    return props.backgroundColor || 'transparent';
  }};
  
  text-align: ${props => props.align || 'left'};
  
  font-style: ${props => props.italic ? 'italic' : 'normal'};
  
  text-decoration: ${props => props.underline ? 'underline' : 'none'};
  
  cursor: ${props => {
    if (props.disabled) return 'not-allowed';
    if (props.onClick) return 'pointer';
    return 'default';
  }};
  
  opacity: ${props => props.disabled ? 0.6 : 1};
  
  transition: all 0.2s ease-in-out;
  
  ${props => props.onClick && !props.disabled && `
    &:hover {
      opacity: 0.8;
    }
  `}
  
  /* Responsive design */
  @media (max-width: 768px) {
    font-size: ${props => {
      switch (props.size) {
        case 'xsmall': return '12px';
        case 'small': return '14px';
        case 'medium': return '16px';
        case 'large': return '18px';
        case 'xlarge': return '20px';
        default: return '16px';
      }
    }};
  }
  
  @media (max-width: 480px) {
    font-size: ${props => {
      switch (props.size) {
        case 'xsmall': return '11px';
        case 'small': return '13px';
        case 'medium': return '15px';
        case 'large': return '17px';
        case 'xlarge': return '19px';
        default: return '15px';
      }
    }};
  }
`;

const Text: React.FC<TextProps> = ({
  children,
  disabled = false,
  color,
  backgroundColor,
  size = 'medium',
  weight = 'normal',
  as = 'p',
  align = 'left',
  italic = false,
  underline = false,
  onClick,
  className,
  style
}) => {
  const handleClick = () => {
    if (!disabled && onClick) {
      onClick();
    }
  };

  return (
    <StyledText
      as={as as any}
      disabled={disabled}
      color={color}
      backgroundColor={backgroundColor}
      size={size}
      weight={weight}
      align={align}
      italic={italic}
      underline={underline}
      onClick={handleClick}
      className={className}
      style={style}
      $element={as}
    >
      {children}
    </StyledText>
  );
};

export default Text;
