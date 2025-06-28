import React from 'react';
import styled from 'styled-components';
import { TableFooterProps } from './TableFooter.types';

const StyledTableFooter = styled.tfoot<TableFooterProps>`
  background-color: ${props => {
    if (props.disabled) return '#f8f9fa';
    return props.backgroundColor || '#f8f9fa';
  }};
  
  color: ${props => {
    if (props.disabled) return '#6c757d';
    return props.textColor || '#495057';
  }};
  
  opacity: ${props => props.disabled ? 0.6 : 1};
  
  font-weight: 500;
  
  border-top: 2px solid #dee2e6;
  
  /* Responsive design */
  @media (max-width: 480px) {
    display: block;
    margin-top: 16px;
    border-top: 1px solid #dee2e6;
  }
`;

const TableFooter: React.FC<TableFooterProps> = ({
  children,
  disabled = false,
  backgroundColor,
  textColor,
  className
}) => {
  return (
    <StyledTableFooter
      disabled={disabled}
      backgroundColor={backgroundColor}
      textColor={textColor}
      className={className}
    >
      {children}
    </StyledTableFooter>
  );
};

export default TableFooter;
