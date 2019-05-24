import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ColorSwatch = ({ color, isSelected, onClick }) => {
  const Border = styled.span`
    display: inline-block;
    position: relative;
    height: 20px;
    width: 20px;
    margin: 0 3px;
    border: 2px solid ${isSelected ? 'rgb(0, 0, 0)' : 'rgb(143, 143, 143)'};
    border-radius: 50%;
  `;
  const Swatch = styled.span`
    display: inline-block;
    position: absolute;
    top: 0.5px;
    left: 0.5px;
    height: 19px;
    width: 19px;
    border-radius: 50%;
    background: ${color};
    cursor: pointer;
  `;

  return (
    <Border>
      <Swatch onClick={onClick} />
    </Border>
  );
};

ColorSwatch.propTypes = {
  color: PropTypes.string.isRequired,
  isSelected: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ColorSwatch;
