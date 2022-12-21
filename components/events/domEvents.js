import createOrderForm from '../forms/createOrderForm';
import {
  deleteOrder, getOrders, getSingleOrder,
} from '../../api/orderData';
import { emptyOrders } from '../../pages/viewOrders';
import showOrders from '../../pages/orders';
import closeOrder from '../forms/closeOrderForm';
import viewRevenue from '../../pages/viewRevenue';
import viewOrderDetails from '../../pages/viewOrderDetails';
import addItemForm from '../forms/addItemForm';
import { getSingleMenuName } from '../../api/menuData';

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
    if (e.target.id.includes('viewOrder-btn')) {
      console.warn('CLICKED viewOrder-btn', e.target.id);
      const [, firebaseKey] = e.target.id.split('--');
      getSingleOrder(firebaseKey).then(viewOrderDetails);
    }
    if (e.target.id.includes('add-item-btn')) {
      console.warn('CLICKED addItemBtn', e.target.id);

      addItemForm();
    }
    if (e.target.id.includes('edit-Item-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      getSingleMenuName(firebaseKey).then((item) => addItemForm(item, user.uid));
    }

    if (e.target.id.includes('go-to-payment-btn')) {
      console.warn('CLICKED makePayment', e.target.id);
      closeOrder();
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
      viewOrderDetails(user.uid);
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
