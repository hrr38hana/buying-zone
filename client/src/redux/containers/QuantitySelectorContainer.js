import { connect } from 'react-redux';
import { increment, decrement } from '../actions/quantity';
import QuantitySelector from '../../components/QuantitySelector';

const mapStateToProps = state => ({
  quantity: state.quantity,
});

const mapDispatchToProps = dispatch => ({
  increment: () => {
    dispatch(increment());
  },

  decrement: () => {
    dispatch(decrement());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(QuantitySelector);
