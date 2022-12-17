import { getOrders } from '../../api/orderData';
import homePage from '../../pages/homePage';
import showOrders from '../../pages/orders';
import { emptyOrders } from '../../pages/viewOrders';
import { signOut } from '../../utils/auth';
import createOrderForm from '../forms/createOrderForm';

// navigation events
const navigationEvents = () => {
  // LOGOUT BUTTON
  document.querySelector('#logout-button')
    .addEventListener('click', signOut);

  document.querySelector('#navigation').addEventListener('click', (e) => {
    if (e.target.id.includes('create-order')) {
      createOrderForm();
    }
  });

  document.querySelector('#navigation').addEventListener('click', (e) => {
    if (e.target.id.includes('view-orders')) {
      getOrders().then((menuNameArray) => {
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
      homePage();
    }
  });
};

export default navigationEvents;
