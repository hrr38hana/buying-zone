import React, { Component } from 'react';
import styled from 'styled-components';

import NewProductBadge from './NewProductBadge';
import ReviewsAverage from './ReviewsAverage';
import ColorSelector from './ColorSelector';
import SizeSelector from './SizeSelector';
import QuantitySelector from './QuantitySelector';
import AddToCartButton from './AddToCartButton';

const ProductName = styled.h1`
  font-size: 24px;
  font-weight: 900;
`;
const Price = styled.div`
  font-size: 1.2em;
`;
const ModelNumber = styled.span`
  float: right;
  font-size: 0.8em;
  font-weight: 700;
  color: rgb(143, 143, 143);
`;

class BuyingZone extends Component {
  constructor() {
    super();
    this.state = {
      currentProduct: null,
      id: Math.floor(Math.random() * 100) + 1,
    };
  }

  async componentDidMount() {
    const { id } = this.state;
    const response = await fetch(`/products/${id}`);
    const currentProduct = await response.json();
    currentProduct.sizes = Object.keys(currentProduct.colors[0].quantityInInventory);
    this.setState({ currentProduct });
  }

  _compareReleaseDate() {
    const { currentProduct } = this.state;
    return currentProduct && (new Date() - new Date(currentProduct.releaseDate)) / 86400000 < 30;
  }

  render() {
    const { currentProduct } = this.state;

    return (
      <div>
        {this._compareReleaseDate() ? <NewProductBadge /> : ''}
        <ProductName>
          {currentProduct ? currentProduct.name : 'Loading...'}
        </ProductName>
        <ReviewsAverage reviews={currentProduct ? currentProduct.reviews : []} />
        <Price>
          {currentProduct ? `$${currentProduct.price.toFixed(2)}` : 'Loading...'}
        </Price>
        <ModelNumber>
          {currentProduct ? `Model ${currentProduct.id}` : 'Loading...'}
        </ModelNumber>
        <p>
          {currentProduct ? currentProduct.description : 'Loading...'}
        </p>
        <ColorSelector colors={currentProduct ? currentProduct.colors : []} />
        <SizeSelector sizes={currentProduct ? currentProduct.sizes : []} />
        <QuantitySelector />
        <AddToCartButton />
      </div>
    );
  }
}

export default BuyingZone;
