import '@babel/polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import BuyingZone from './components/BuyingZone';

const GlobalStyle = createGlobalStyle`
  body {
    box-sizing: border-box;
    font-family: Roboto, Helvetica, sans-serif;
    margin: 0.75em;
    margin-top: 1.5em;
  }

  *:focus {
    outline: none;
  }
`;

const App = () => (
  <div>
    <GlobalStyle />
    <BuyingZone />
  </div>
);

ReactDOM.render(<App />, document.getElementById('buying-zone'));
