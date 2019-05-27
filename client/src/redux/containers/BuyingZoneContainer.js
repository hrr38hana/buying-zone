import { connect } from 'react-redux';
import changeProduct from '../actions/product';
import changeColor from '../actions/color';
import BuyingZone from '../../components/BuyingZone';

const mapStateToProps = state => ({
  product: state.product,
  color: state.color,
  size: state.size,
  quantity: state.quantity,
});

const mapDispatchToProps = dispatch => ({
  setProduct: (product) => {
    dispatch(changeProduct(product));
    dispatch(changeColor(product.colors[0]));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(BuyingZone);
