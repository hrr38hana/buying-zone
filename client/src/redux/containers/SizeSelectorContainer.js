import { connect } from 'react-redux';
import changeSize from '../actions/size';
import SizeSelector from '../../components/SizeSelector';

const mapDispatchToProps = dispatch => ({
  setSelectedSize: (size) => {
    dispatch(changeSize(size));
  },
});

export default connect(() => ({}), mapDispatchToProps)(SizeSelector);
