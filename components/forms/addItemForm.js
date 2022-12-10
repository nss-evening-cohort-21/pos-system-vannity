import clearDom from '../../utils/clearDom';
import renderToDOM from '../../utils/renderToDom';

const addItemForm = (obj = {}) => {
    clearDom();
    const domString = `
    <form id="${obj.firebaseKey ? `update-item--${obj.firebaseKey}` : 'submit-item'}" class="mb-4">
    <div class="form-group">
        <label for="title">Item Name</label>
        <input type="text" class="form-control" id="name" aria-describedby="itemName" value="${obj.name || ''}" required>
      </div>
      <div class="form-group">
      <label for="description">Description</label>
      <textarea class="form-control" placeholder="Book Description" id="description" style="height: 100px">${obj.description || ''}</textarea>
    </div>
      <div class="form-group">
      <label for="price">Item Price</label>
      <textarea class="form-control" id="price" style="height: 40px">${obj.price || ''}</textarea>
    </div>
    <button type="submit" class="btn btn-primary">Submit Item
    </button>
    </form>
    `;
    renderToDOM('#form-container', domString);
};

export default addItemForm;