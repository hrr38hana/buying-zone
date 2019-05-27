import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.button`
  -webkit-user-select: none;
  width: 100%;
  margin-top: 2em;
  border: none;
  padding: 1.1em;
  background-color: rgb(0, 136, 202);
  background-color: rgb(192, 226, 242);
  color: rgb(255, 255, 255);
  font-size: 0.8em;
  :hover {
    background-color: rgb(0, 156, 233);
    cursor: pointer;
  }
`;
const Icon = styled.span`
  margin-right: 1em;
`;

const AddToCartButton = ({ onClick }) => (
  <Button onClick={onClick}>
    <Icon className="fas fa-shopping-cart" />
    Add to cart
  </Button>
);

AddToCartButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddToCartButton;
