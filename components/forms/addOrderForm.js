import renderToDom from '../../utils/renderToDom';
import clearDom from '../../utils/clearDom';

// Use this From for both Create/Update

const addOrderForm = (obj = {}) => {
	clearDom();
	const domString = `<form id="${obj.firebaseKey ? `edit-order--${obj.firebaseKey}` : "create-order"}" class="mb-4">
      <div class="form-group">
        <label for="image">Order Name</label>
        <input type="text" class="form-control" id="first_name" placeholder="Order Name" value="${obj.first_name || ""}" required>
      </div>
      <div class="form-group">
        <label for="image"></label>
        <input type="text" class="form-control" id="last_name" placeholder="Last Name" value="${obj.last_name || ""}"required>
      </div>
      <div class="form-group">
        <label for="title">Email</label>
        <input type="email" class="form-control" id="email" aria-describedby="Email" placeholder="Enter Email" value="${obj.email || ""}"required>
      </div>
      <button type="submit" class="btn btn-primary mt-3">Submit Author</button>
    </form>`;

	renderToDom("#form-container", domString);
};

export default addOrderForm;
