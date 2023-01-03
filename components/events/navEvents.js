import { getOrders } from '../../api/orderData';
import homePage from '../../pages/homePage';
import { showOrders } from '../../pages/orders';
import { emptyOrders } from '../../pages/viewOrders';
import { signOut } from '../../utils/auth';
import createOrderForm from '../forms/createOrderForm';

// navigation events
const navigationEvents = (user) => {
  // LOGOUT BUTTON
  document.querySelector('#logout-button')
    .addEventListener('click', signOut);

  document.querySelector('#navigation').addEventListener('click', (e) => {
    if (e.target.id.includes('create-order')) {
      createOrderForm(user.uid);
    }
  });

  document.querySelector('#navigation').addEventListener('click', (e) => {
    if (e.target.id.includes('view-orders')) {
      getOrders(user.uid).then((menuNameArray) => {
        if (menuNameArray.length) {
          showOrders(menuNameArray);
        } else {
          emptyOrders();
        }
      });
    }
  });

  document.querySelector('#navigation').addEventListener('click', (e) => {
    if (e.target.id.includes('home')) {
      homePage(user.uid);
    }
  });
};

export default navigationEvents;
