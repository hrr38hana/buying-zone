import React, { useState } from 'react';
import styled from 'styled-components';

const QuantityButton = styled.button`
  border: none;
  background-color: inherit;
  padding: 0;
  font-size: 1.5em;
  cursor: pointer;
`;
const Quantity = styled.span`
  padding: 0 1em;
`;

const QuantitySelector = () => {
  const [quantityPurchased, setQuantityPurchased] = useState(1);

  return (
    <div>
      Quantity
      <br />
      <QuantityButton
        onClick={() => setQuantityPurchased(quantityPurchased === 1 ? 1 : quantityPurchased - 1)}
      >
        –
      </QuantityButton>
      <Quantity>{quantityPurchased}</Quantity>
      <QuantityButton onClick={() => setQuantityPurchased(quantityPurchased + 1)}>+</QuantityButton>
    </div>
  );
};

export default QuantitySelector;
