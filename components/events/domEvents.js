import createOrderForm from '../forms/createOrderForm';
import { getOrders } from '../../api/orderData';
import { emptyOrders, viewOrders } from '../../pages/viewOrders';

const domEvents = () => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('home-create-order')) {
      createOrderForm();
    }
  });

  document.querySelector('#home-view-orders').addEventListener('click', () => {
    getOrders().then((menuNameArray) => {
      if (menuNameArray.length) {
        viewOrders(menuNameArray);
      } else {
        emptyOrders();
      }
    });
  });
};

export default domEvents;
