import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { DropdownProps, DropdownOption } from './Dropdown.types';

const DropdownContainer = styled.div<{ $fullWidth?: boolean }>`
  position: relative;
  display: inline-block;
  width: ${props => props.$fullWidth ? '100%' : 'auto'};
  min-width: 200px;
  
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const DropdownButton = styled.button<{
  $size?: 'small' | 'medium' | 'large';
  $backgroundColor?: string;
  $textColor?: string;
  $disabled?: boolean;
}>`
  width: 100%;
  padding: ${props => 
    props.$size === 'small' ? '6px 12px' : 
    props.$size === 'large' ? '14px 20px' : 
    '10px 16px'
  };
  
  background-color: ${props => {
    if (props.$disabled) return '#f8f9fa';
    return props.$backgroundColor || '#ffffff';
  }};
  
  color: ${props => {
    if (props.$disabled) return '#6c757d';
    return props.$textColor || '#333333';
  }};
  
  border: 2px solid ${props => props.$disabled ? '#e9ecef' : '#dee2e6'};
  border-radius: 4px;
  cursor: ${props => props.$disabled ? 'not-allowed' : 'pointer'};
  
  font-size: ${props => 
    props.$size === 'small' ? '12px' : 
    props.$size === 'large' ? '16px' : 
    '14px'
  };
  
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  transition: all 0.2s ease-in-out;
  
  &:hover:not(:disabled) {
    border-color: #0066cc;
  }
  
  &:focus:not(:disabled) {
    outline: none;
    border-color: #0066cc;
    box-shadow: 0 0 0 2px rgba(0, 102, 204, 0.2);
  }
  
  @media (max-width: 480px) {
    padding: ${props => 
      props.$size === 'small' ? '8px 12px' : 
      props.$size === 'large' ? '16px 20px' : 
      '12px 16px'
    };
  }
`;

const DropdownList = styled.ul<{ $isOpen: boolean; $size?: 'small' | 'medium' | 'large' }>`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  z-index: 1000;
  
  background-color: #ffffff;
  border: 2px solid #dee2e6;
  border-top: none;
  border-radius: 0 0 4px 4px;
  
  max-height: 200px;
  overflow-y: auto;
  
  display: ${props => props.$isOpen ? 'block' : 'none'};
  
  margin: 0;
  padding: 0;
  list-style: none;
  
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const DropdownItem = styled.li<{
  $size?: 'small' | 'medium' | 'large';
  $disabled?: boolean;
}>`
  padding: ${props => 
    props.$size === 'small' ? '6px 12px' : 
    props.$size === 'large' ? '14px 20px' : 
    '10px 16px'
  };
  
  cursor: ${props => props.$disabled ? 'not-allowed' : 'pointer'};
  
  color: ${props => props.$disabled ? '#6c757d' : '#333333'};
  
  font-size: ${props => 
    props.$size === 'small' ? '12px' : 
    props.$size === 'large' ? '16px' : 
    '14px'
  };
  
  &:hover {
    background-color: ${props => props.$disabled ? 'transparent' : '#f8f9fa'};
  }
  
  &:active {
    background-color: ${props => props.$disabled ? 'transparent' : '#e9ecef'};
  }
`;

const Arrow = styled.span<{ $isOpen: boolean }>`
  transform: ${props => props.$isOpen ? 'rotate(180deg)' : 'rotate(0deg)'};
  transition: transform 0.2s ease-in-out;
  
  &::after {
    content: '▼';
    font-size: 12px;
  }
`;

const Dropdown: React.FC<DropdownProps> = ({
  options,
  value,
  placeholder = 'Select an option',
  disabled = false,
  backgroundColor,
  textColor,
  size = 'medium',
  onChange,
  className,
  fullWidth = false
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  const selectedOption = options.find(option => option.value === value);
  
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);
  
  const handleToggle = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
    }
  };
  
  const handleSelect = (option: DropdownOption) => {
    if (!option.disabled && onChange) {
      onChange(option.value);
      setIsOpen(false);
    }
  };
  
  return (
    <DropdownContainer ref={dropdownRef} className={className} $fullWidth={fullWidth}>
      <DropdownButton
        onClick={handleToggle}
        disabled={disabled}
        $size={size}
        $backgroundColor={backgroundColor}
        $textColor={textColor}
        $disabled={disabled}
        type="button"
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        <span>{selectedOption ? selectedOption.label : placeholder}</span>
        <Arrow $isOpen={isOpen} />
      </DropdownButton>
      
      <DropdownList $isOpen={isOpen} $size={size}>
        {options.map((option) => (
          <DropdownItem
            key={option.value}
            onClick={() => handleSelect(option)}
            $size={size}
            $disabled={option.disabled}
          >
            {option.label}
          </DropdownItem>
        ))}
      </DropdownList>
    </DropdownContainer>
  );
};

export default Dropdown;