import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';
import { getMenuNames } from '../api/menuData';
import itemCards from './itemCards';

const viewOrderDetails = (order) => {
  clearDom();

  let domString = '';

  domString += `
      <h1>Order Name: ${order.order_name}</h1>
    <h1 id="orderTotal">Order Total: </h1>
    <h2 class="dollarSign">$</h2>
    <div class="card">
    <div class="card-body">
      '<button class="btn btn-success btn-lg mb-4" id="add-item-btn">Add Item</button>
      <button class="btn btn-primary btn-lg mb-4" id="go-to-payment-btn">Go to Payment</button>'
      `;

  renderToDOM('#form-container', domString);
  getMenuNames().then(itemCards);
};

export default viewOrderDetails;
