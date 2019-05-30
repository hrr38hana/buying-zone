import { combineReducers } from 'redux';

import changeProduct from './product';
import changeColor from './color';
import changeSize from './size';
import changeQuantity from './quantity';

export default combineReducers({
  product: changeProduct,
  color: changeColor,
  size: changeSize,
  quantity: changeQuantity,
});
