import React from 'react';
import './DynamicBackground.css';

const DynamicBackground = ({ backgroundImage }) => {
  return (
    <div 
      className="dynamic-background"
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none'
      }}
    />
  );
};

export default DynamicBackground; 