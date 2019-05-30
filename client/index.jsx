import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import { Provider } from 'react-redux';
import configureStore from './redux/store';
import BuyingZone from './redux/containers/BuyingZoneContainer';

const GlobalStyle = createGlobalStyle`
  body {
    box-sizing: border-box;
    font-family: Roboto, Helvetica, sans-serif;
    margin: 0.75em;
  }

  *:focus {
    outline: none;
  }
`;

// const { pathname } = window.location;
// const id = pathname.includes('/products/') ? pathname.split('/')[2] : null;

// const product = window.__product__;
// delete window.__product__;
// const store = configureStore({ product, color: product.colors[0] });

ReactDOM.render(
  <Provider store={configureStore()}>
    <GlobalStyle />
    <BuyingZone />
  </Provider>,
  document.getElementById('buying-zone'),
);
