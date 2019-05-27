import { connect } from 'redux';
import changeColor from '../actions/color';
import ColorSelector from '../../components/ColorSelector';

const mapStateToProps = state => ({
  color: state.color,
});

const mapDispatchToProps = dispatch => ({
  setSelectedColor: (color) => {
    dispatch(changeColor(color));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ColorSelector);
