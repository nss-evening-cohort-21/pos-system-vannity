import clearDom from '../utils/clearDom';
import renderToDom from '../utils/renderToDom';
import { getSingleOrder } from '../api/orderData';

const viewOrderDetails = (firebaseKey, arr = []) => {
  clearDom();
  getSingleOrder(firebaseKey).then((obj) => {
    let cardString = '';
    arr.map((item) => {
      cardString += `
      <h1>Order Name: ${obj.order_name}</h1>
    <h1>Order Total: </h1>
    <div class="card">
    <div class="card-body">
      <h5 class="card-title">${item.name}</h5>
      <p class="card-text">${item.price}</p>
      ${obj.isFulfilled ? `
      <a href="#" class="card-link" id="editItem--${item.firebaseKey}">Edit</a>
      <a href="#" class="card-link" id="deleteItem--${item.firebaseKey}">Delete</a>` : ''}
    </div>
  </div>
    `;
      renderToDom('#orderItems', cardString);

      const btnString = '<button class="btn btn-success btn-lg mb-4" id="add-item-btn">Add Item</button><button class="btn btn-primary btn-lg mb-4" id="go-to-payment-btn">Go to Payment</button>';

      renderToDom('#order-details-button', btnString);
    });
  });
};

export default viewOrderDetails;
