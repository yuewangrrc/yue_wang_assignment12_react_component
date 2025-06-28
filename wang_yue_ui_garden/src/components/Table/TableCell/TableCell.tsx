import React from 'react';
import styled from 'styled-components';
import { TableCellProps } from './TableCell.types';

const StyledTableCell = styled.td<TableCellProps>`
  padding: ${props => 
    props.padding === 'small' ? '8px' : 
    props.padding === 'large' ? '16px' : 
    '12px'
  };
  
  background-color: ${props => {
    if (props.disabled) return '#f8f9fa';
    if (props.isHeader) return '#e9ecef';
    return props.backgroundColor || 'transparent';
  }};
  
  color: ${props => {
    if (props.disabled) return '#6c757d';
    return props.textColor || '#333333';
  }};
  
  text-align: ${props => props.align || 'left'};
  
  border: 1px solid ${props => props.disabled ? '#e9ecef' : '#dee2e6'};
  
  cursor: ${props => {
    if (props.disabled) return 'not-allowed';
    if (props.onClick) return 'pointer';
    return 'default';
  }};
  
  opacity: ${props => props.disabled ? 0.6 : 1};
  
  transition: all 0.2s ease-in-out;
  
  font-weight: ${props => props.isHeader ? '600' : '400'};
  
  &:hover {
    background-color: ${props => {
      if (props.disabled) return props.backgroundColor || 'transparent';
      if (props.onClick) return '#f8f9fa';
      return props.backgroundColor || 'transparent';
    }};
  }
  
  /* Responsive design */
  @media (max-width: 768px) {
    padding: ${props => 
      props.padding === 'small' ? '6px' : 
      props.padding === 'large' ? '12px' : 
      '8px'
    };
    
    font-size: 14px;
  }
  
  @media (max-width: 480px) {
    padding: ${props => 
      props.padding === 'small' ? '4px' : 
      props.padding === 'large' ? '8px' : 
      '6px'
    };
    
    font-size: 12px;
    
    /* Stack cells on very small screens */
    display: block;
    border: none;
    border-bottom: 1px solid #dee2e6;
    text-align: left !important;
  }
`;

const StyledHeaderCell = styled.th<TableCellProps>`
  padding: ${props => 
    props.padding === 'small' ? '8px' : 
    props.padding === 'large' ? '16px' : 
    '12px'
  };
  
  background-color: ${props => {
    if (props.disabled) return '#f8f9fa';
    return props.backgroundColor || '#e9ecef';
  }};
  
  color: ${props => {
    if (props.disabled) return '#6c757d';
    return props.textColor || '#333333';
  }};
  
  text-align: ${props => props.align || 'left'};
  
  border: 1px solid ${props => props.disabled ? '#e9ecef' : '#dee2e6'};
  
  cursor: ${props => {
    if (props.disabled) return 'not-allowed';
    if (props.onClick) return 'pointer';
    return 'default';
  }};
  
  opacity: ${props => props.disabled ? 0.6 : 1};
  
  transition: all 0.2s ease-in-out;
  
  font-weight: 600;
  
  &:hover {
    background-color: ${props => {
      if (props.disabled) return props.backgroundColor || '#e9ecef';
      if (props.onClick) return '#d4dae4';
      return props.backgroundColor || '#e9ecef';
    }};
  }
  
  /* Responsive design */
  @media (max-width: 768px) {
    padding: ${props => 
      props.padding === 'small' ? '6px' : 
      props.padding === 'large' ? '12px' : 
      '8px'
    };
    
    font-size: 14px;
  }
  
  @media (max-width: 480px) {
    padding: ${props => 
      props.padding === 'small' ? '4px' : 
      props.padding === 'large' ? '8px' : 
      '6px'
    };
    
    font-size: 12px;
    
    display: block;
    border: none;
    border-bottom: 1px solid #dee2e6;
    text-align: left !important;
  }
`;

const TableCell: React.FC<TableCellProps> = ({
  children,
  disabled = false,
  backgroundColor,
  textColor,
  padding = 'medium',
  align = 'left',
  isHeader = false,
  onClick,
  className,
  colSpan,
  rowSpan
}) => {
  const handleClick = () => {
    if (!disabled && onClick) {
      onClick();
    }
  };

  const Component = isHeader ? StyledHeaderCell : StyledTableCell;

  return (
    <Component
      disabled={disabled}
      backgroundColor={backgroundColor}
      textColor={textColor}
      padding={padding}
      align={align}
      isHeader={isHeader}
      onClick={handleClick}
      className={className}
      colSpan={colSpan}
      rowSpan={rowSpan}
    >
      {children}
    </Component>
  );
};

export default TableCell;
