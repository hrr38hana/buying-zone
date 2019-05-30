export default function changeSize(state = '', action) {
  switch (action.type) {
    case 'CHANGE_SIZE':
      return action.size;
    default:
      return state;
  }
}
