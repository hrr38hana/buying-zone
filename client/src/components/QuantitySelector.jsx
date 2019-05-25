import React, { useState } from 'react';
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

const QuantitySelector = () => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div>
      Quantity
      <br />
      <QuantityButton onClick={() => setQuantity(quantity === 1 ? 1 : quantity - 1)}>
        –
      </QuantityButton>
      <Quantity>
        {quantity}
      </Quantity>
      <QuantityButton onClick={() => setQuantity(quantity + 1)}>
        +
      </QuantityButton>
    </div>
  );
};

export default QuantitySelector;
