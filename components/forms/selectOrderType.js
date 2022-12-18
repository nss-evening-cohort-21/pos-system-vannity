import { getOrders } from '../../api/orderData';
import renderToDOM from '../../utils/renderToDom';

const selectOrderType = (orderId, user) => {
  let domString = `<label for="ordertype">Select Order Type</label>
    <select class="form-control" id="orderType" required>
    <option value="">Select Order Type</option>`;

  getOrders(user).then((orderArray) => {
    orderArray.forEach((orders) => {
      domString += `
    <option
    value="${orders.firebaseKey}"
    ${orderId === orderArray.firebaseKey ? 'selected' : ''}>
    ${orders.order_type}
    </option>`;
    });
    domString += '</select>';

    renderToDOM('#select-ordertype', domString);
  });
};

export default selectOrderType;
