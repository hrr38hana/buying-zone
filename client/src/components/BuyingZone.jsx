import React, { Component } from 'react';
import styled from 'styled-components';

import NewProductBadge from './NewProductBadge';
import ReviewsAverage from './ReviewsAverage';
import ColorSelector from './ColorSelector';
import SizeSelector from './SizeSelector';
import QuantitySelector from './QuantitySelector';
import AddToCartButton from './AddToCartButton';

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
    this.setState({ currentProduct });
  }

  render() {
    const { currentProduct } = this.state;

    const ProductName = styled.h1`
      font-size: 24px;
      font-weight: 900;
      margin: 5px auto;
    `;
    const Price = styled.div`
      font-size: 1.2em;
    `;
    const ModelNumber = styled.span`
      float: right;
      color: rgb(143, 143, 143);
      font-size: 0.8em;
      font-weight: 700;
    `;

    return (
      <div>
        {currentProduct && (new Date() - new Date(currentProduct.releaseDate)) / 86400000
          < 30 ? <NewProductBadge /> : ''}
        <ProductName>
          {currentProduct ? currentProduct.name : 'Loading...'}
        </ProductName>
        <ReviewsAverage reviews={currentProduct ? currentProduct.reviews : []} />
        <Price>
          {currentProduct ? `$${currentProduct.price}.00` : 'Loading...'}
        </Price>
        <ModelNumber>
          {currentProduct ? `Model ${currentProduct.id}` : 'Loading...'}
        </ModelNumber>
        <br />
        <p>
          {currentProduct ? currentProduct.description : 'Loading...'}
        </p>
        <ColorSelector
          colors={currentProduct ? currentProduct.colors : []}
        />
        <br />
        <SizeSelector
          sizes={currentProduct ? Object.keys(currentProduct.colors[0].quantityInInventory) : []}
        />
        <QuantitySelector />
        <AddToCartButton />
      </div>
    );
  }
}

export default BuyingZone;
