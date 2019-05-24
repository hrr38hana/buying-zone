import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  -webkit-user-select: none;
  width: 100%;
  margin-top: 2em;
  border: none;
  padding: 1.1em;
  background-color: rgb(0, 136, 202);
  color: rgb(255, 255, 255);
  font-size: 0.8em;
  :hover {
    background-color: rgb(0, 156, 233);
  }
`;
const Icon = styled.span`
  margin-right: 1em;
`;

const AddToCartButton = () => (
  <div>
    <Button>
      <Icon className="fas fa-shopping-cart" />
      Add to cart
    </Button>
  </div>
);

export default AddToCartButton;
