import React from 'react';
import styled from 'styled-components';
import { TableHeaderProps } from './TableHeader.types';

const StyledTableHeader = styled.thead<TableHeaderProps>`
  background-color: ${props => {
    if (props.disabled) return '#f8f9fa';
    return props.backgroundColor || '#e9ecef';
  }};
  
  color: ${props => {
    if (props.disabled) return '#6c757d';
    return props.textColor || '#333333';
  }};
  
  opacity: ${props => props.disabled ? 0.6 : 1};
  
  font-weight: 600;
  
  /* Responsive design */
  @media (max-width: 480px) {
    display: none; /* Hide header on mobile, cells will show labels */
  }
`;

const TableHeader: React.FC<TableHeaderProps> = ({
  children,
  disabled = false,
  backgroundColor,
  textColor,
  className
}) => {
  return (
    <StyledTableHeader
      disabled={disabled}
      backgroundColor={backgroundColor}
      textColor={textColor}
      className={className}
    >
      {children}
    </StyledTableHeader>
  );
};

export default TableHeader;
