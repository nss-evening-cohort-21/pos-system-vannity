import clearDom from '../../utils/clearDom';
import renderToDOM from '../../utils/renderToDom';

const addItemForm = (obj = {}, orderId) => {
  clearDom();
  const domString = `
    <form id="${obj.firebaseKey ? `update-item--${obj.firebaseKey}` : 'submit-item'}" class="mb-4">
    <div class="form-group">
        <label for="title">Item Name</label>
        <input type="text" class="form-control" placeholder="Item Name" id="name" aria-describedby="itemName" value="${obj.name || ''}" required>
      </div>
      <div class="form-group">
      <label for="description">Description</label>
      <textarea class="form-control" placeholder="Order Description" id="description" style="height: 60px">${obj.description || ''}</textarea>
    </div>
      <div class="form-group">
      <label for="price">Item Price</label>
      <textarea type="number" class="form-control" placeholder="Item Price" id="price">${obj.price || ''}</textarea>
    </div>
    <button type="submit" class="btn btn-primary"> Create/Edit Item
    </button>
    <input type="hidden" id="order-id" value="${obj.orderId ? obj.orderId : orderId}"></input>
    </form>
    `;
  renderToDOM('#form-container', domString);
};

export default addItemForm;
