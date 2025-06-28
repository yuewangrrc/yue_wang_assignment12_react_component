import React from 'react';
import styled from 'styled-components';
import { RadioButtonProps } from './RadioButton.types';

const RadioContainer = styled.label<{
  $disabled?: boolean;
  $size?: 'small' | 'medium' | 'large';
}>`
  display: inline-flex;
  align-items: center;
  cursor: ${props => props.$disabled ? 'not-allowed' : 'pointer'};
  opacity: ${props => props.$disabled ? 0.6 : 1};
  
  margin: ${props => 
    props.$size === 'small' ? '4px 0' : 
    props.$size === 'large' ? '8px 0' : 
    '6px 0'
  };
  
  transition: opacity 0.2s ease-in-out;
  
  /* Responsive design */
  @media (max-width: 768px) {
    width: 100%;
    margin: ${props => 
      props.$size === 'small' ? '6px 0' : 
      props.$size === 'large' ? '10px 0' : 
      '8px 0'
    };
  }
`;

const HiddenRadio = styled.input.attrs({ type: 'radio' })`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
`;

const CustomRadio = styled.div<{
  $checked?: boolean;
  $disabled?: boolean;
  $size?: 'small' | 'medium' | 'large';
  $color?: string;
}>`
  position: relative;
  
  width: ${props => 
    props.$size === 'small' ? '16px' : 
    props.$size === 'large' ? '24px' : 
    '20px'
  };
  
  height: ${props => 
    props.$size === 'small' ? '16px' : 
    props.$size === 'large' ? '24px' : 
    '20px'
  };
  
  border: 2px solid ${props => {
    if (props.$disabled) return '#e9ecef';
    if (props.$checked) return props.$color || '#0066cc';
    return '#dee2e6';
  }};
  
  border-radius: 50%;
  background-color: ${props => {
    if (props.$disabled) return '#f8f9fa';
    return '#ffffff';
  }};
  
  transition: all 0.2s ease-in-out;
  
  &::after {
    content: '';
    position: absolute;
    display: ${props => props.$checked ? 'block' : 'none'};
    
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    
    width: ${props => 
      props.$size === 'small' ? '6px' : 
      props.$size === 'large' ? '10px' : 
      '8px'
    };
    
    height: ${props => 
      props.$size === 'small' ? '6px' : 
      props.$size === 'large' ? '10px' : 
      '8px'
    };
    
    background-color: ${props => {
      if (props.$disabled) return '#6c757d';
      return props.$color || '#0066cc';
    }};
    
    border-radius: 50%;
  }
  
  ${RadioContainer}:hover &:not([disabled]) {
    border-color: ${props => props.$color || '#0066cc'};
    box-shadow: 0 0 0 2px ${props => `${props.$color || '#0066cc'}20`};
  }
  
  @media (max-width: 480px) {
    width: ${props => 
      props.$size === 'small' ? '18px' : 
      props.$size === 'large' ? '26px' : 
      '22px'
    };
    
    height: ${props => 
      props.$size === 'small' ? '18px' : 
      props.$size === 'large' ? '26px' : 
      '22px'
    };
  }
`;

const LabelText = styled.span<{
  $disabled?: boolean;
  $textColor?: string;
  $size?: 'small' | 'medium' | 'large';
}>`
  margin-left: ${props => 
    props.$size === 'small' ? '6px' : 
    props.$size === 'large' ? '10px' : 
    '8px'
  };
  
  font-size: ${props => 
    props.$size === 'small' ? '12px' : 
    props.$size === 'large' ? '16px' : 
    '14px'
  };
  
  color: ${props => {
    if (props.$disabled) return '#6c757d';
    return props.$textColor || '#333333';
  }};
  
  user-select: none;
  
  @media (max-width: 768px) {
    font-size: ${props => 
      props.$size === 'small' ? '14px' : 
      props.$size === 'large' ? '18px' : 
      '16px'
    };
  }
`;

const RadioButton: React.FC<RadioButtonProps> = ({
  label,
  value,
  checked = false,
  disabled = false,
  name,
  size = 'medium',
  color,
  textColor,
  onChange,
  className
}) => {
  const handleChange = () => {
    if (!disabled && onChange) {
      onChange(value);
    }
  };

  return (
    <RadioContainer
      $disabled={disabled}
      $size={size}
      className={className}
    >
      <HiddenRadio
        name={name}
        value={value}
        checked={checked}
        disabled={disabled}
        onChange={handleChange}
      />
      <CustomRadio
        $checked={checked}
        $disabled={disabled}
        $size={size}
        $color={color}
      />
      <LabelText
        $disabled={disabled}
        $textColor={textColor}
        $size={size}
      >
        {label}
      </LabelText>
    </RadioContainer>
  );
};

export default RadioButton;
