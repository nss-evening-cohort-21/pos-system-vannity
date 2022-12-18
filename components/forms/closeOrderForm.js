import clearDom from '../../utils/clearDom';
import renderToDOM from '../../utils/renderToDom';

const closeOrder = (obj = {}) => {
  clearDom();
  const domString = `<form id="create-order--${obj.firebaseKey}" class="mb-4">
    <div class="form-group" id="select-paymenttype">
    <label for="paymenttype">Select Payment Type</label>
    <select class="form-control" id="orderType" required>
    <option value="">Select Order Type</option>
     <option value="Cash"${obj.payment_type === 'Cash' ? 'selected' : ''}>Cash</option>
      <option value="Check"${obj.payment_type === 'Check' ? 'selected' : ''}>Check</option>
       <option value="Debit"${obj.payment_type === 'Debit' ? 'selected' : ''}>Debit</option>
       <option value="Credit"${obj.payment_type === 'Credit' ? 'selected' : ''}>Credit</option>
       <option value="Mobile-Payment"${obj.payment_type === 'Mobile-Payment' ? 'selected' : ''}>Mobile-Payment</option>
       </select>
    </div>
    <div class="form-group">
    <label for="tip">Tip Amount</label>
    <textarea type="number" class="form-control" id="tip">${obj.tip || ''}</textarea>
  </div>
    <button type="submit" class="btn btn-success mt-3" id="close-order">Close Order</button>
  </form>`;

  renderToDOM('#form-container', domString);
};

export default closeOrder;
