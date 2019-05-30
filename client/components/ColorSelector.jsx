import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ColorSwatch from './ColorSwatch';

const ColorDetail = styled.span`
  color: rgb(143, 143, 143);
  font-style: italic;
`;

const ColorSelector = ({ colors, selectedColor, setSelectedColor }) => (
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
    {colors.map(color => (
      <ColorSwatch
        color={color.rgb}
        isSelected={selectedColor ? color._id === selectedColor._id : false}
        onClick={() => setSelectedColor(color)}
        key={color._id}
      />
    ))}
  </div>
);

ColorSelector.propTypes = {
  colors: PropTypes.arrayOf(PropTypes.object).isRequired,
  setSelectedColor: PropTypes.func.isRequired,
  selectedColor: PropTypes.object,
};

export default ColorSelector;
