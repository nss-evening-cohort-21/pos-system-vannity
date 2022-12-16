import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const showOrders = (array) => {
  clearDom();

  let domString = '';
  array.forEach((item) => {
    domString += `
  <div class="mt-5 d-flex flex-wrap">
  <div class="d-flex flex-column">
  <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${item.order_name}</h5>
    <h6 class="card-subtitle mb-2 text-muted">${item.isFulfilled}</h6>
    <p class="card-text">${item.phone_number}</p>
    <p class="card-text">${item.email}</p>
    <p class="card-text">${item.order_type}</p>
    <a href="#" id="viewOrder-btn--${item.firebaseKey}" class="card-link">Details</a>
    <a href="#" id="editOrder-btn--${item.firebaseKey}"class="card-link">Edit</a>
    <a href="#" id="delete-btn--${item.firebaseKey}"class="card-link">Delete</a>
  </div>
</div>`;
  });
  renderToDOM('#store', domString);
};
export default showOrders;
