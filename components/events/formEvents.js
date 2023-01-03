import {
  createOrder, getOrders, updateOrder, getSingleOrder
} from '../../api/orderData';
import viewOrderDetails from '../../pages/viewOrderDetails';
import { showOrders } from '../../pages/orders';
// import addItemForm from '../forms/addItemForm';
// import closeOrder from '../forms/closeOrderForm';
import {
  createMenuName, getSingleMenuName, updateMenuName, getMenuByOrderId
} from '../../api/menuData';
import { getOrderDetails } from '../../api/mergeData';

const formEvents = (user) => {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();
    if (e.target.id.includes('submit-order')) {
      // console.warn('CLICKED SUBMIT ORDER', e.target.id);

      const payload = {
        order_name: document.querySelector('#order_name').value,
        phone_number: document.querySelector('#phone_number').value,
        email: document.querySelector('#email').value,
        order_type: document.querySelector('#orderType').value,
        uid: user.uid,
        isFulfilled: true,
      };
      createOrder(payload).then(({ name }) => {
        const patchPayLoad = { firebaseKey: name };

        updateOrder(patchPayLoad).then(() => {
          getOrders(user.uid).then(showOrders);
        });
      });
    }
    if (e.target.id.includes('update-order')) {
      const [, firebaseKey] = e.target.id.split('--');
      const payload = {
        order_name: document.querySelector('#order_name').value,
        phone_number: document.querySelector('#phone_number').value,
        email: document.querySelector('#email').value,
        order_type: document.querySelector('#orderType').value,
        uid: user.uid,
        isFulfilled: true,
        firebaseKey,
      };
      updateOrder(payload).then(() => {
        getOrders(user.uid).then(showOrders);
      });
    }

    if (e.target.id.includes('submit-item')) {
      const payload = {
        name: document.querySelector('#name').value,
        price: document.querySelector('#price').value,
        description: document.querySelector('#description').value,
        orderId: document.querySelector('#order-id').value,
        uid: user.uid,
      };
      createMenuName(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };
        updateMenuName(patchPayload).then(() => {
          getOrderDetails(payload.orderId).then((menuNameArray) => {
            getSingleOrder(payload.orderId).then((orderObject) => {
              viewOrderDetails(orderObject, menuNameArray);
            });
          });
        });
      });
    }
    if (e.target.id.includes('edit-item-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      const payload = {
        name: document.querySelector('#name').value,
        price: document.querySelector('#price').value,
        description: document.querySelector('#description').value,
        uid: user.uid,
        firebaseKey,
      };
      updateMenuName(payload).then(() => {
        getSingleMenuName(firebaseKey).then((item) => {
          getSingleOrder(item.orderId).then((orderObject) => {
            getMenuByOrderId(orderObject.firebaseKey).then((menuNameArray) => {
              viewOrderDetails(orderObject.firebaseKey, menuNameArray);
            });
          });
        });
      });
    }
  });
};

export default formEvents;
