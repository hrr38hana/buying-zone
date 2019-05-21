import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ColorSwatch = ({ color }) => {
  const Border = styled.span`
    position: relative;
    height: 20px;
    width: 20px;
    margin: 0 3px;
    border: 2px solid rgb(143, 143, 143);
    border-radius: 50%;
    display: inline-block;
  `;
  const Swatch = styled.span`
    position: absolute;
    top: 0.5px;
    left: 0.5px;
    height: 19px;
    width: 19px;
    border-radius: 50%;
    background: rgb(${color});
    display: inline-block;
  `;

  return (
    <Border>
      <Swatch />
    </Border>
  );
};

ColorSwatch.propTypes = {
  color: PropTypes.string.isRequired,
};

export default ColorSwatch;
