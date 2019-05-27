import { connect } from 'redux';
import changeProduct from '../actions/product';
import BuyingZone from '../../components/BuyingZone';

const mapStateToProps = state => ({
  product: state.product,
});

const mapDispatchToProps = dispatch => ({
  setProduct: (product) => {
    dispatch(changeProduct(product));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(BuyingZone);
