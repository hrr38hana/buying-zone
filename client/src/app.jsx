import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import store from './redux/store';
import BuyingZone from './components/BuyingZone';

module.exports = product => (
  renderToString(
    <Provider store={store}>
      <BuyingZone product={product} />
    </Provider>,
  )
);
