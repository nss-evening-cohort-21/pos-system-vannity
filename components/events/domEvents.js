import createOrderForm from '../forms/createOrderForm';
import { getOrders, getSingleOrder } from '../../api/orderData';
import { emptyOrders, viewOrders } from '../../pages/viewOrders';

const domEvents = () => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('home-create-order')) {
      createOrderForm();
    }
    if (e.target.id.includes('editOrder-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      getSingleOrder(firebaseKey).then((item) => createOrderForm(item));
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
