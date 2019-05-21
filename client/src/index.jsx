import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class BuyingZone extends Component {
  constructor() {
    super();
    this.state = {
      currentProduct: null,
      id: 1,
    };
  }

  componentDidMount() {
    const { id } = this.state;
    fetch(`/products/${id}`)
      .then(response => response.json())
      .then(currentProduct => this.setState({ currentProduct }));
  }

  render() {
    const { currentProduct } = this.state;
    return (
      <div className="buying-zone">
        <h1>
          {currentProduct ? currentProduct.name : 'Loading...'}
        </h1>
        <span>
          {currentProduct ? `$${currentProduct.price}.00` : 'Loading...'}
        </span>
        <span>
          {currentProduct ? `Model ${currentProduct.id}` : 'Loading...'}
        </span>
        <p>
          {currentProduct ? currentProduct.description : 'Loading...'}
        </p>
      </div>
    );
  }
}

ReactDOM.render(<BuyingZone />, document.getElementById('buying-zone'));
