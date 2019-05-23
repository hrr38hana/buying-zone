import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background-color: rgb(0, 136, 202);
  border: none;
  width: 100%;
  padding: 1.1em;
  margin-top: 2em;
  font-size: 0.8em;
  color: rgb(255, 255, 255);
  -webkit-user-select: none;
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
