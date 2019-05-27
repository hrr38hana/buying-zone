import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SelectorWrapper = styled.div`
  margin-top: 0.5em;
  border: 1px solid rgb(143, 143, 143);
  font-size: 32px;
`;
const Select = styled.select`
  -webkit-appearance: none;
  display: inline-block;
  width: 100%;
  margin-right: -2%;
  border: none;
  border-radius: 0;
  padding: 1.1em;
  font-size: 13px;
  font-weight: 100;
`;
const Arrow = styled.span`
  margin-left: -1em;
  color: rgb(100, 100, 100);
  font-size: 13px;
  pointer-events: none;
`;

const SizeSelector = ({ sizes, setSelectedSize }) => (
  <div>
    <div> Size </div>
    <SelectorWrapper>
      <Select defaultValue="placeholder" onChange={e => setSelectedSize(e.target.value)}>
        <option value="placeholder" disabled> Please select </option>
        {sizes.map(size => (
          <option key={size}>
            {size}
          </option>
        ))}
      </Select>
      <Arrow className="fas fa-chevron-down" />
    </SelectorWrapper>
  </div>
);

SizeSelector.propTypes = {
  sizes: PropTypes.arrayOf(PropTypes.string).isRequired,
  setSelectedSize: PropTypes.func.isRequired,
};

export default SizeSelector;
