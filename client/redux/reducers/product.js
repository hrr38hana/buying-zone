export default function changeProduct(state = null, action) {
  switch (action.type) {
    case 'CHANGE_PRODUCT':
      return action.product;
    default:
      return state;
  }
}
