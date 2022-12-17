import clearDom from '../../utils/clearDom';
import renderToDOM from '../../utils/renderToDom';
import selectPaymentType from './selectPaymentType';

const closeOrder = (obj = {}) => {
  clearDom();
  const domString = `<form id="${obj.firebaseKey ? `close-order--${obj.firebaseKey}` : 'create-order'}" class="mb-4">
      <div class="form-group" id="paymentType"></div>
      <div class="form-group">
        <label for="tip amount">Tip Amount</label>
        <input type="number" class="form-control" id="tipAmount" aria-describedby="Tip Amount" placeholder="Enter Tip Amount" value="${obj.tip_amount || ''}"required>
      </div>
      <button type="submit" class="btn btn-primary mt-3" id="close-order">Close Order</button>
    </form>`;

  renderToDOM('#form-container', domString);
  selectPaymentType(`${obj.order_type || ''}`);
};

export default closeOrder;
