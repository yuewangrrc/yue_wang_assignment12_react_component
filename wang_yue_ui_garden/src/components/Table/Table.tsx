import React from 'react';
import styled from 'styled-components';
import { TableProps } from './Table.types';

const StyledTable = styled.table<TableProps>`
  width: 100%;
  border-collapse: collapse;
  
  background-color: ${props => {
    if (props.disabled) return '#f8f9fa';
    return props.backgroundColor || '#ffffff';
  }};
  
  opacity: ${props => props.disabled ? 0.6 : 1};
  
  border: 1px solid ${props => props.disabled ? '#e9ecef' : '#dee2e6'};
  border-radius: 4px;
  
  /* Responsive design */
  @media (max-width: 768px) {
    font-size: 14px;
  }
  
  @media (max-width: 480px) {
    border: none;
    
    /* Convert table to card-like layout on mobile */
    & thead,
    & tbody,
    & tfoot,
    & tr,
    & td,
    & th {
      display: block;
    }
  }
`;

const Table: React.FC<TableProps> = ({
  children,
  disabled = false,
  backgroundColor,
  className
}) => {
  return (
    <StyledTable
      disabled={disabled}
      backgroundColor={backgroundColor}
      className={className}
    >
      {children}
    </StyledTable>
  );
};

export default Table;
