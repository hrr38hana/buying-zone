import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import store from '../client/src/redux/store';
import BuyingZone from '../client/src/components/BuyingZone';

module.exports = renderToString(
  <Provider store={store}>
    <BuyingZone />
  </Provider>,
);
