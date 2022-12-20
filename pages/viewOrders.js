import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const emptyOrders = () => {
  const domString = '<h3>No Orders</h3>';
  renderToDOM('#store', domString);
};

const viewOrders = (obj) => {
  clearDom();

  const domString = `
  <div class="mt-5 d-flex flex-wrap">
  <div class="d-flex flex-column" id="view-card">
  <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${obj.order_name}</h5>
    <h6 class="card-subtitle mb-2 text-muted">${obj.isFulfilled}</h6>
    <p class="card-text">${obj.phone_number}</p>
    <p class="card-text">${obj.email}</p>
    <p class="card-text">${obj.order_type}</p>
    <a href="#" id="view-details--${obj.firebaseKey}" class="card-link">Details</a>
    <a href="#" id="edit-details--${obj.firebaseKey}"class="card-link">Edit</a>
    <a href="#" id="delete-details--${obj.firebaseKey}"class="card-link">Delete</a>
  </div>
</div>`;

  renderToDOM('#view', domString);
};

export { emptyOrders, viewOrders };
