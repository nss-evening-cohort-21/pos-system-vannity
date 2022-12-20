import { createOrder, getOrders, updateOrder } from '../../api/orderData';
import viewOrderDetails from '../../pages/orderDetails';
import showOrders from '../../pages/orders';
import addItemForm from '../forms/addItemForm';
import closeOrder from '../forms/closeOrderForm';

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
        // item_name: 'Maurice',
        // order_total: '',
        // payment_type: '',
        // tip_amount: '',
        uid: user.uid,
        // isFulfilled: 'true',
      };
      createOrder(payload).then(({ name }) => {
        const patchPayLoad = { firebaseKey: name };

        updateOrder(patchPayLoad).then(() => {
          addItemForm(user.uid).then(closeOrder);
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
        // item_name: 'Maurice',
        // order_total: '',
        // payment_type: '',
        // tip_amount: '',
        uid: user.uid,
        // isFulfilled: document.querySelector('#isFulfilled'),
        firebaseKey,
      };
      updateOrder(payload).then(() => {
        getOrders(user.uid).then(showOrders);
      });
    }

    if (e.target.id.includes('add-edit-item')) {
      const [, firebaseKey] = e.target.id.split('--');
      const payload = {
        name: document.querySelector('#name').value,
        price: document.querySelector('#price').value,
        description: document.querySelector('#description').value,
        uid: user.uid,
        // isFulfilled: document.querySelector('#isFulfilled'),
        firebaseKey,
      };
      updateOrder(payload).then(() => {
        viewOrderDetails(user.uid);
      });
    }
  });
};

export default formEvents;
