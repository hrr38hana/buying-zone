export default function changeQuantity(state = 1, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state !== 1 ? state - 1 : 1;
    default:
      return state;
  }
}
