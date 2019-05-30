import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import NewProductBadge from './NewProductBadge';
import ReviewsAverage from './ReviewsAverage';
import ColorSelector from '../redux/containers/ColorSelectorContainer';
import SizeSelector from '../redux/containers/SizeSelectorContainer';
import QuantitySelector from '../redux/containers/QuantitySelectorContainer';
import AddToCartButton from '../redux/containers/AddToCartButtonContainer';

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
  constructor(props) {
    super(props);
    this.handlePurchase = this.handlePurchase.bind(this);
  }

  async componentDidMount() {
    const { setProduct } = this.props;
    let { product } = this.props;
    if (!product) {
      const response = await fetch('/products/12');
      product = await response.json();
      product.sizes = Object.keys(product.colors[0].quantityInInventory);
      setProduct(product);
    }
  }

  async handlePurchase() {
    const {
      product: { id },
      setProduct,
      color,
      size,
      quantity,
    } = this.props;
    const response = await fetch(`/products/${id}`, {
      method: 'PUT',
      body: JSON.stringify({ colorId: color._id, size, quantity }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
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
        <br />
        <br />
        <Price>
          {product ? `$${product.price.toFixed(2)}` : 'Loading...'}
        </Price>
        <ModelNumber>
          {product ? `Model ${product.id}` : 'Loading...'}
        </ModelNumber>
        <br />
        <p>
          {product ? product.description : 'Loading...'}
        </p>
        <br />
        <ColorSelector colors={product ? product.colors : []} />
        <br />
        <SizeSelector sizes={product ? product.sizes || [] : []} />
        <br />
        <QuantitySelector />
        <AddToCartButton onClick={this.handlePurchase} />
      </div>
    );
  }
}

BuyingZone.propTypes = {
  product: PropTypes.object,
  setProduct: PropTypes.func,
  color: PropTypes.object,
  size: PropTypes.string,
  quantity: PropTypes.number,
};

export default BuyingZone;
