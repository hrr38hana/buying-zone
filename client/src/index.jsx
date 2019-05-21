import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styled, { createGlobalStyle } from 'styled-components';
import ColorSwatch from './components/ColorSwatch';

class BuyingZone extends Component {
  constructor() {
    super();
    this.state = {
      currentProduct: null,
      currentColor: 0,
      id: 52,
    };
  }

  componentDidMount() {
    const { id } = this.state;
    fetch(`/products/${id}`)
      .then(response => response.json())
      .then(currentProduct => this.setState({ currentProduct }));
  }

  render() {
    const { currentProduct, currentColor } = this.state;
    const GlobalStyle = createGlobalStyle`
      body {
        box-sizing: border-box;
        font-family: Helvetica, sans-serif;
      }
    `;
    const ProductName = styled.h1`
    `;
    const Price = styled.span`
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
        <GlobalStyle />
        <ProductName>
          {currentProduct ? currentProduct.name : 'Loading...'}
        </ProductName>
        <Price>
          {currentProduct ? `$${currentProduct.price}.00` : 'Loading...'}
        </Price>
        <br />
        <ModelNumber>
          {currentProduct ? `Model ${currentProduct.id}` : 'Loading...'}
        </ModelNumber>
        <br />
        <p>
          {currentProduct ? currentProduct.description : 'Loading...'}
        </p>
        <ColorSwatch
          color={currentProduct ? currentProduct.colors[currentColor].rgb.join(',') : '0, 0, 0'}
        />
      </div>
    );
  }
}

ReactDOM.render(<BuyingZone />, document.getElementById('buying-zone'));
