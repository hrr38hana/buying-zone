import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import NewProductBadge from './NewProductBadge';
import ReviewsAverage from './ReviewsAverage';
import ColorSelector from '../redux/containers/ColorSelectorContainer';
import SizeSelector from '../redux/containers/SizeSelectorContainer';
import QuantitySelector from '../redux/containers/QuantitySelectorContainer';
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
  async componentDidMount() {
    const { setProduct } = this.props;
    const id = 4;
    const response = await fetch(`/products/${id}`);
    const product = await response.json();
    product.sizes = Object.keys(product.colors[0].quantityInInventory);
    setProduct(product);
  }

  _compareReleaseDate() {
    const { product } = this;
    return product && (new Date() - new Date(product.releaseDate)) / 86400000 < 30;
  }

  render() {
    const { product } = this.props;

    return (
      <div>
        {this._compareReleaseDate() ? <NewProductBadge /> : ''}
        <ProductName>
          {product ? product.name : 'Loading...'}
        </ProductName>
        <ReviewsAverage reviews={product ? product.reviews : []} />
        <Price>
          {product ? `$${product.price.toFixed(2)}` : 'Loading...'}
        </Price>
        <ModelNumber>
          {product ? `Model ${product.id}` : 'Loading...'}
        </ModelNumber>
        <p>
          {product ? product.description : 'Loading...'}
        </p>
        <ColorSelector colors={product ? product.colors : []} />
        <SizeSelector sizes={product ? product.sizes : []} />
        <QuantitySelector />
        <AddToCartButton />
      </div>
    );
  }
}

BuyingZone.propTypes = {
  product: PropTypes.object,
  setProduct: PropTypes.func.isRequired,
};

export default BuyingZone;
