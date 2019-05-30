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

ReactDOM.render(
  <Provider store={configureStore()}>
    <GlobalStyle />
    <BuyingZone />
  </Provider>,
  document.getElementById('buying-zone'),
);
