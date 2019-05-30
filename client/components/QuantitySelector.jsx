import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const QuantityButton = styled.button`
  border: none;
  padding: 0;
  background-color: inherit;
  font-size: 1.5em;
  cursor: pointer;
`;
const Quantity = styled.span`
  display: inline-block;
  width: 2em;
  text-align: center;
  font-size: 0.85em;
  font-weight: 200;
`;

const QuantitySelector = ({ quantity, increment, decrement }) => (
  <div>
    Quantity
    <br />
    <QuantityButton onClick={() => decrement()}>
      –
    </QuantityButton>
    <Quantity>
      {quantity}
    </Quantity>
    <QuantityButton onClick={() => increment()}>
      +
    </QuantityButton>
  </div>
);

QuantitySelector.propTypes = {
  quantity: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
};

export default QuantitySelector;
