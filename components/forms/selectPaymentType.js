import { getOrders } from '../../api/orderData';
import renderToDOM from '../../utils/renderToDom';

const selectPaymentType = (paymentId, user) => {
  let domString = `<label for="paymentType">Payment Type></label>
    <select class="form-control" id="paymentType" required>
    <option value="">Select a Payment Type</option>`;

  getOrders(user).then((orderArray) => {
    orderArray.forEach((orders) => {
      domString += `
    <option
    value="${orders.firebaseKey}"
    ${paymentId === orderArray.firebaseKey ? 'selected' : ''}>
    ${orders.payment_type}
    </option>`;
    });
    domString += '</select>';

    renderToDOM('#select-payment', domString);
  });
};

export default selectPaymentType;
