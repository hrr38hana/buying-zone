import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ColorSwatch from './ColorSwatch';

const ColorSelector = ({ colors }) => {
  const ColorDetail = styled.span`
    color: rgb(143, 143, 143);
    font-style: italic;
  `;

  const [selectedColor, setSelectedColor] = useState(colors[0]);

  return (
    <div>
      <div>
        {'Color / '}
        <ColorDetail>
          {selectedColor ? selectedColor.name : 'Loading...'}
        </ColorDetail>
        {'; Finish / '}
        <ColorDetail>
          {selectedColor ? selectedColor.finish : 'Loading...'}
        </ColorDetail>
      </div>
      <br />
      {colors.map(color => (
        <ColorSwatch
          color={color.rgb.join(',')}
          key={color._id}
          onClick={() => setSelectedColor(colors[0])}
        />
      ))}
    </div>
  );
};

ColorSelector.propTypes = {
  colors: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ColorSelector;
