import clearDom from '../../utils/clearDom';
import renderToDOM from '../../utils/renderToDom';
import selectOrderType from './selectOrderType';

const createOrderForm = (obj = {}) => {
  clearDom();
  const domString = `<form id="${obj.firebaseKey ? `edit-order--${obj.firebaseKey}` : 'create-order'}" class="mb-4">
      <div class="form-group">
        <label for="image">Order Name</label>
        <input type="text" class="form-control" id="order_name" placeholder="Order Name" value="${obj.order_name || ''}" required>
      </div>
      <div class="form-group">
        <label for="phone"></label>
        <input type="tel" class="form-control" id="phone_number" placeholder="###-###-####" value="${obj.phone_number || ''}"required>
      </div>
      <div class="form-group">
        <label for="title">Email</label>
        <input type="email" class="form-control" id="email" aria-describedby="Email" placeholder="Enter Email" value="${obj.email || ''}"required>
      </div>
      <div class="form-group" id="select-ordertype">
      </div>
      <button type="submit" class="btn btn-primary mt-3">Create/Edit Order</button>
    </form>`;

  renderToDOM('#form-container', domString);
  selectOrderType(`${obj.order_type || ''}`);
};

export default createOrderForm;
