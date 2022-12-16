import { getOrders } from '../../api/orderData';
import showOrders from '../../pages/orders';
import { emptyOrders } from '../../pages/viewOrders';
import { signOut } from '../../utils/auth';
import clearDom from '../../utils/clearDom';
import createOrderForm from '../forms/createOrderForm';
import domBuilder from '../shared/domBuilder';
import navBar from '../shared/navBar';

// navigation events
const navigationEvents = () => {
  // LOGOUT BUTTON
  document.querySelector('#logout-button')
    .addEventListener('click', signOut);

  document.querySelector('#navigation').addEventListener('click', (e) => {
    if (e.target.id.includes('create-order')) {
      createOrderForm();
    }
    if (e.target.id.includes('view-order')) {
      getOrders().then((menuNameArray) => {
        if (menuNameArray.length) {
          showOrders(menuNameArray);
        } else {
          emptyOrders();
        }
      });
    }
    if (e.target.id.includes('home')) {
      clearDom();
      domBuilder();
      navBar();
    }
  });
};

export default navigationEvents;
