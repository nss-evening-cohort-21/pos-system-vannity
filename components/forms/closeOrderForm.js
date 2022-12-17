import clearDom from '../../utils/clearDom';
import renderToDOM from '../../utils/renderToDom';

const closeOrder = (obj = {}) => {
  clearDom();
  const domString = `<form id="create-order--${obj.firebaseKey}" class="mb-4">
    <div class="form-group">
      <label for="payment">Payment Type</label>
      <input type="text" class="form-control" id="select-payment" placeholder="Select a Payment Type" value="${obj.payment_type || ''}" required>
    </div>
    <div class="form-group">
    <label for="tip">Tip Amount</label>
    <textarea type="number" class="form-control" id="tip">${obj.tip || ''}</textarea>
  </div>
    <button type="submit" class="btn btn-success mt-3">Close Order</button>
  </form>`;

  renderToDOM('#form-container', domString);
};

export default closeOrder;
