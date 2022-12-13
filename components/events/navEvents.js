import { getOrders } from '../../api/orderData';
import { signOut } from '../../utils/auth';
import addOrderForm from '../forms/addOrderForm';

// navigation events
const navigationEvents = () => {
  // LOGOUT BUTTON
  document.querySelector('#logout-button')
    .addEventListener('click', signOut);

  // View Orders
  document.querySelector('#view-orders')
    .addEventListener('click', () => {
      getOrders();
    });

  // Create Order
  document.querySelector('#create-order')
    .addEventListener('click', () => {
      addOrderForm();
    });
};

export default navigationEvents;
