import React from 'react';
import ColorPicker from 'react-color';

const ColorPickerComponent = ({ onChange }) => {
  const handleChange = color => {
    onChange(color.hex);
  };

  return <ColorPicker color={color} onChange={handleChange} />;
};

export default ColorPickerComponent;