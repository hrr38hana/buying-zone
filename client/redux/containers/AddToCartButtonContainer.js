import { connect } from 'react-redux';
import AddToCartButton from '../../components/AddToCartButton';

const mapStateToProps = state => ({
  color: state.color,
  size: state.size,
  quantity: state.quantity,
});

export default connect(mapStateToProps)(AddToCartButton);
