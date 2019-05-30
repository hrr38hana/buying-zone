import { connect } from 'react-redux';
import changeSize from '../actions/size';
import SizeSelector from '../../components/SizeSelector';

const mapStateToProps = state => ({
  color: state.color,
  size: state.size,
  quantity: state.quantity,
});

const mapDispatchToProps = dispatch => ({
  setSelectedSize: (size) => {
    dispatch(changeSize(size));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SizeSelector);
