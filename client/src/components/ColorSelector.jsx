import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ColorSwatch from './ColorSwatch';

const ColorSelector = ({ colors }) => {
  const ColorDetail = styled.span`
    color: rgb(143, 143, 143);
    font-style: italic;
  `;

  const [selectedColor, setSelectedColor] = useState(colors[0]);
  useEffect(() => {
    if (!selectedColor) {
      setSelectedColor(colors[0]);
    }
  });

  return (
    <div>
      <div>
        {'Color / '}
        <ColorDetail>
          {selectedColor ? selectedColor.name : 'Loading...'}
        </ColorDetail>
        {selectedColor && selectedColor.finish ? '; Finish / ' : ''}
        <ColorDetail>
          {selectedColor ? selectedColor.finish : ''}
        </ColorDetail>
      </div>
      <br />
      {colors.map((color, i) => (
        <ColorSwatch
          color={color.rgb.join(',')}
          isSelected={selectedColor ? color._id === selectedColor._id : false}
          onClick={() => setSelectedColor(colors[i])}
          key={color._id}
        />
      ))}
    </div>
  );
};

ColorSelector.propTypes = {
  colors: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ColorSelector;
