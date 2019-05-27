export default function changeColor(state = null, action) {
  switch (action.type) {
    case 'CHANGE_COLOR':
      return action.color;
    default:
      return state;
  }
}
