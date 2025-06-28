import React, { useState } from 'react';
import styled from 'styled-components';
import { HeroImageProps } from './HeroImage.types';

const HeroContainer = styled.div<{
  $height?: string;
  $width?: string;
  $disabled?: boolean;
  $clickable?: boolean;
}>`
  position: relative;
  width: ${props => props.$width || '100%'};
  height: ${props => props.$height || '400px'};
  overflow: hidden;
  border-radius: 8px;
  
  cursor: ${props => {
    if (props.$disabled) return 'not-allowed';
    if (props.$clickable) return 'pointer';
    return 'default';
  }};
  
  opacity: ${props => props.$disabled ? 0.6 : 1};
  
  transition: all 0.3s ease-in-out;
  
  ${props => props.$clickable && !props.$disabled && `
    &:hover {
      transform: scale(1.02);
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    }
  `}
  
  /* Responsive design */
  @media (max-width: 768px) {
    height: ${props => {
      if (props.$height && props.$height !== '400px') {
        const numericHeight = parseInt(props.$height);
        return `${Math.max(numericHeight * 0.7, 250)}px`;
      }
      return '300px';
    }};
    border-radius: 6px;
  }
  
  @media (max-width: 480px) {
    height: ${props => {
      if (props.$height && props.$height !== '400px') {
        const numericHeight = parseInt(props.$height);
        return `${Math.max(numericHeight * 0.6, 200)}px`;
      }
      return '250px';
    }};
    border-radius: 4px;
  }
`;

const StyledImage = styled.img<{
  $objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
  $disabled?: boolean;
}>`
  width: 100%;
  height: 100%;
  object-fit: ${props => props.$objectFit || 'cover'};
  display: block;
  
  filter: ${props => props.$disabled ? 'grayscale(100%) brightness(0.7)' : 'none'};
  transition: filter 0.3s ease-in-out;
`;

const Overlay = styled.div<{
  $overlayColor?: string;
  $textColor?: string;
  $disabled?: boolean;
}>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  
  background-color: ${props => {
    if (props.$disabled) return 'rgba(0, 0, 0, 0.6)';
    return props.$overlayColor || 'rgba(0, 0, 0, 0.4)';
  }};
  
  color: ${props => {
    if (props.$disabled) return '#a0a0a0';
    return props.$textColor || '#ffffff';
  }};
  
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 20px;
  
  transition: background-color 0.3s ease-in-out;
`;

const LoadingPlaceholder = styled.div<{
  $height?: string;
  $width?: string;
}>`
  width: ${props => props.$width || '100%'};
  height: ${props => props.$height || '400px'};
  background-color: #f8f9fa;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #6c757d;
  font-size: 16px;
  
  @media (max-width: 768px) {
    height: ${props => {
      if (props.$height && props.$height !== '400px') {
        const numericHeight = parseInt(props.$height);
        return `${Math.max(numericHeight * 0.7, 250)}px`;
      }
      return '300px';
    }};
  }
  
  @media (max-width: 480px) {
    height: ${props => {
      if (props.$height && props.$height !== '400px') {
        const numericHeight = parseInt(props.$height);
        return `${Math.max(numericHeight * 0.6, 200)}px`;
      }
      return '250px';
    }};
  }
`;

const ErrorPlaceholder = styled(LoadingPlaceholder)`
  background-color: #f8d7da;
  color: #721c24;
`;

const HeroImage: React.FC<HeroImageProps> = ({
  src,
  alt,
  disabled = false,
  height,
  width,
  overlay,
  overlayColor,
  textColor,
  objectFit = 'cover',
  onClick,
  className,
  loading = 'lazy'
}) => {
  const [imageLoading, setImageLoading] = useState(true);
  const [imageError, setImageError] = useState(false);

  const handleImageLoad = () => {
    setImageLoading(false);
  };

  const handleImageError = () => {
    setImageLoading(false);
    setImageError(true);
  };

  const handleClick = () => {
    if (!disabled && onClick) {
      onClick();
    }
  };

  if (imageError) {
    return (
      <ErrorPlaceholder 
        $height={height} 
        $width={width}
        className={className}
      >
        Failed to load image
      </ErrorPlaceholder>
    );
  }

  if (imageLoading) {
    return (
      <LoadingPlaceholder 
        $height={height} 
        $width={width}
        className={className}
      >
        Loading...
      </LoadingPlaceholder>
    );
  }

  return (
    <HeroContainer
      $height={height}
      $width={width}
      $disabled={disabled}
      $clickable={!!onClick}
      onClick={handleClick}
      className={className}
    >
      <StyledImage
        src={src}
        alt={alt}
        $objectFit={objectFit}
        $disabled={disabled}
        onLoad={handleImageLoad}
        onError={handleImageError}
        loading={loading}
      />
      {overlay && (
        <Overlay
          $overlayColor={overlayColor}
          $textColor={textColor}
          $disabled={disabled}
        >
          {overlay}
        </Overlay>
      )}
    </HeroContainer>
  );
};

export default HeroImage;
