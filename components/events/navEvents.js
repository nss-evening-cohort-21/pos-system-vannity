import { getOrders } from '../../api/orderData';
import { signOut } from '../../utils/auth';

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
};

export default navigationEvents;
