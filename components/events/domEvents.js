import createOrderForm from '../forms/createOrderForm';
import {
  deleteOrder, getOrders, getSingleOrder,
} from '../../api/orderData';
import { emptyOrders } from '../../pages/viewOrders';
import showOrders from '../../pages/orders';
import closeOrder from '../forms/closeOrderForm';
import viewRevenue from '../../pages/viewRevenue';

const domEvents = (user) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('home-create-order')) {
      createOrderForm({}, user.uid);
    }

    if (e.target.id.includes('delete-btn')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        const [, firebaseKey] = (e.target.id.split('--'));

        deleteOrder(firebaseKey).then(() => {
          getOrders(user.uid).then(showOrders);
        });
      }
    }

    if (e.target.id.includes('editOrder-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      getSingleOrder(firebaseKey).then((item) => createOrderForm(item, user.uid));
    }
  });

  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('home-view-orders')) {
      getOrders(user.uid).then((menuNameArray) => {
        if (menuNameArray.length) {
          showOrders(menuNameArray);
        } else {
          emptyOrders();
        }
      });
    }
  });

  document.querySelector('#form-container').addEventListener('click', (e) => {
    if (e.target.id.includes('add-edit-item')) {
      closeOrder(user.uid);
    }
  });
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('home-view-revenue')) {
      viewRevenue();
    }
  });
  // document.querySelectorAll('#form-container').addEventListener('click', (e) => {
  //   if (e.target.id.includes('submit-order')) {
  //     updateOrder();
  //   }
  // });
};

export default domEvents;
