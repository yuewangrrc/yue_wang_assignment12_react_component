import React from 'react';
import styled from 'styled-components';
import { TableRowProps } from './TableRow.types';

const StyledTableRow = styled.tr<TableRowProps>`
  background-color: ${props => {
    if (props.disabled) return '#f8f9fa';
    if (props.highlighted) return '#e3f2fd';
    if (props.striped) return '#f8f9fa';
    return props.backgroundColor || 'transparent';
  }};
  
  cursor: ${props => {
    if (props.disabled) return 'not-allowed';
    if (props.onClick) return 'pointer';
    return 'default';
  }};
  
  opacity: ${props => props.disabled ? 0.6 : 1};
  
  transition: all 0.2s ease-in-out;
  
  &:hover {
    background-color: ${props => {
      if (props.disabled) return props.backgroundColor || 'transparent';
      if (props.onClick) return '#f0f0f0';
      return props.backgroundColor || 'transparent';
    }};
  }
  
  /* Responsive design */
  @media (max-width: 480px) {
    display: block;
    border: 1px solid #dee2e6;
    margin-bottom: 8px;
    border-radius: 4px;
    
    &:hover {
      background-color: ${props => props.backgroundColor || 'transparent'};
    }
  }
`;

const TableRow: React.FC<TableRowProps> = ({
  children,
  disabled = false,
  backgroundColor,
  striped = false,
  highlighted = false,
  onClick,
  className
}) => {
  const handleClick = () => {
    if (!disabled && onClick) {
      onClick();
    }
  };

  return (
    <StyledTableRow
      disabled={disabled}
      backgroundColor={backgroundColor}
      striped={striped}
      highlighted={highlighted}
      onClick={handleClick}
      className={className}
    >
      {children}
    </StyledTableRow>
  );
};

export default TableRow;
