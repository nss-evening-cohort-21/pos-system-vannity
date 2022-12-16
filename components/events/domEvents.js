import createOrderForm from '../forms/createOrderForm';
import { deleteOrder, getOrders } from '../../api/orderData';
import { emptyOrders, viewOrders } from '../../pages/viewOrders';
import showOrders from '../../pages/orders';

const domEvents = () => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('home-create-order')) {
      createOrderForm();
    }

    if (e.target.id.includes('delete-details')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        const [, firebaseKey] = (e.target.id.split('--'));

        deleteOrder(firebaseKey).then(() => {
          getOrders().then(showOrders);
        });
      }
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
