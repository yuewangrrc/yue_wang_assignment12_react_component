import React, { useState } from 'react';
import styled from 'styled-components';
import { ImgProps } from './Img.types';

const ImageContainer = styled.div<{
  $width?: string | number;
  $height?: string | number;
  $disabled?: boolean;
  $clickable?: boolean;
}>`
  display: inline-block;
  position: relative;
  
  width: ${props => 
    typeof props.$width === 'number' ? `${props.$width}px` : 
    props.$width || 'auto'
  };
  
  height: ${props => 
    typeof props.$height === 'number' ? `${props.$height}px` : 
    props.$height || 'auto'
  };
  
  cursor: ${props => {
    if (props.$disabled) return 'not-allowed';
    if (props.$clickable) return 'pointer';
    return 'default';
  }};
  
  opacity: ${props => props.$disabled ? 0.6 : 1};
  
  transition: all 0.2s ease-in-out;
  
  ${props => props.$clickable && !props.$disabled && `
    &:hover {
      transform: scale(1.05);
    }
  `}
  
  /* Responsive design */
  @media (max-width: 768px) {
    max-width: 100%;
    height: auto;
  }
`;

const StyledImage = styled.img<{
  $borderColor?: string;
  $borderRadius?: string;
  $objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
  $disabled?: boolean;
}>`
  width: 100%;
  height: 100%;
  display: block;
  
  border: ${props => props.$borderColor ? `2px solid ${props.$borderColor}` : 'none'};
  border-radius: ${props => props.$borderRadius || '0'};
  
  object-fit: ${props => props.$objectFit || 'cover'};
  
  filter: ${props => props.$disabled ? 'grayscale(100%) brightness(0.7)' : 'none'};
  
  transition: filter 0.2s ease-in-out;
  
  @media (max-width: 768px) {
    max-width: 100%;
    height: auto;
    object-fit: contain;
  }
`;

const LoadingPlaceholder = styled.div<{
  $width?: string | number;
  $height?: string | number;
}>`
  width: ${props => 
    typeof props.$width === 'number' ? `${props.$width}px` : 
    props.$width || '200px'
  };
  
  height: ${props => 
    typeof props.$height === 'number' ? `${props.$height}px` : 
    props.$height || '150px'
  };
  
  background-color: #f8f9fa;
  border: 2px dashed #dee2e6;
  border-radius: 4px;
  
  display: flex;
  align-items: center;
  justify-content: center;
  
  color: #6c757d;
  font-size: 14px;
  
  @media (max-width: 768px) {
    max-width: 100%;
    height: auto;
    min-height: 100px;
  }
`;

const ErrorPlaceholder = styled(LoadingPlaceholder)`
  background-color: #f8d7da;
  border-color: #f5c6cb;
  color: #721c24;
`;

const Img: React.FC<ImgProps> = ({
  src,
  alt,
  disabled = false,
  width,
  height,
  borderColor,
  borderRadius,
  objectFit = 'cover',
  onClick,
  className,
  loading = 'lazy',
  showLoading = true
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
        $width={width} 
        $height={height}
        className={className}
      >
        Failed to load image
      </ErrorPlaceholder>
    );
  }

  if (imageLoading && showLoading) {
    return (
      <LoadingPlaceholder 
        $width={width} 
        $height={height}
        className={className}
      >
        Loading...
      </LoadingPlaceholder>
    );
  }

  return (
    <ImageContainer
      $width={width}
      $height={height}
      $disabled={disabled}
      $clickable={!!onClick}
      onClick={handleClick}
      className={className}
    >
      <StyledImage
        src={src}
        alt={alt}
        $borderColor={borderColor}
        $borderRadius={borderRadius}
        $objectFit={objectFit}
        $disabled={disabled}
        onLoad={handleImageLoad}
        onError={handleImageError}
        loading={loading}
        style={{ display: imageLoading && showLoading ? 'none' : 'block' }}
      />
    </ImageContainer>
  );
};

export default Img;
