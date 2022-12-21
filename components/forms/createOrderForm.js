import clearDom from '../../utils/clearDom';
import renderToDOM from '../../utils/renderToDom';

const createOrderForm = (obj = {}) => {
  clearDom();
  const domString = `<form id="${obj.firebaseKey ? `update-order--${obj.firebaseKey}` : 'submit-order'}" class="mb-4">
      <div class="form-group">
        <label for="image">Order Name</label>
        <input type="text" class="form-control" id="order_name" placeholder="Order Name" value="${obj.order_name || ''}" required>
      </div>
      <div class="form-group">
        <label for="phone">Phone Number</label>
        <input type="tel" class="form-control" id="phone_number" placeholder="###-###-####" value="${obj.phone_number || ''}"required>
      </div>
      <div class="form-group">
        <label for="title">Email</label>
        <input type="email" class="form-control" id="email" aria-describedby="Email" placeholder="Enter Email" value="${obj.email || ''}"required>
      </div>
      <div class="form-group" id="select-ordertype"><label for="ordertype">Select Order Type</label>
    <select class="form-control" id="orderType" required>
    <option value="">Select Order Type</option>
     <option value="In-Person"${obj.order_type === 'In-Person' ? 'selected' : ''}>In-Person</option>
      <option value="Online"${obj.order_type === 'Online' ? 'selected' : ''}>Online</option>
       <option value="Mobile"${obj.order_type === 'Mobile' ? 'selected' : ''}>Mobile</option>
       </select>
      </div>
      <button type="submit" class="btn btn-primary mt-3" id="create-edit">Create/Edit Order</button>
    </form>`;

  renderToDOM('#form-container', domString);
};

export default createOrderForm;
