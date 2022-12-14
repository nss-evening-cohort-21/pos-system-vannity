import { getOrders } from '../../api/orderData';
import { viewOrders, emptyOrders } from '../../pages/viewOrders';
import { signOut } from '../../utils/auth';

// navigation events
const navigationEvents = () => {
  // LOGOUT BUTTON
  document.querySelector('#logout-button')
    .addEventListener('click', signOut);
};

document.querySelector('#view-orders').addEventListener('click', () => {
  getOrders().then((menuNameArray) => {
    if (menuNameArray.length) {
      viewOrders(menuNameArray);
    } else {
      emptyOrders();
    }
  });
});

export default navigationEvents;
