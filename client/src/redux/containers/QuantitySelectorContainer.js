import { connect } from 'redux';
import { increment, decrement } from '../actions/quantity';
import QuantitySelector from '../../components/QuantitySelector';

const mapStateToProps = state => ({
  quantity: state.quantity,
});

const mapDispatchToProps = dispatch => ({
  incrementQuantity: () => {
    dispatch(increment());
  },

  decrementQuantity: () => {
    dispatch(decrement());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(QuantitySelector);
