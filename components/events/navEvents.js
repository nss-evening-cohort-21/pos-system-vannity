import { getOrders } from '../../api/orderData';
import { emptyOrders, viewOrders } from '../../pages/viewOrders';
import { signOut } from '../../utils/auth';

// navigation events
const navigationEvents = () => {
  // LOGOUT BUTTON
  document.querySelector('#logout-button')
    .addEventListener('click', signOut);

  document.querySelector('#home-view-orders').addEventListener('click', () => {
    getOrders().then((menuNameArray) => {
      if (menuNameArray.length) {
        viewOrders(menuNameArray);
      } else {
        emptyOrders();
      }
    });
  });

  document.querySelector('#view-orders').addEventListener('click', () => {
    getOrders().then((menuNameArray) => {
      if (menuNameArray.length) {
        viewOrders(menuNameArray);
      } else {
        emptyOrders();
      }
    });
  });
};

export default navigationEvents;
