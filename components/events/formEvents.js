import { createOrder, getOrders, updateOrder } from '../../api/orderData';
import showOrders from '../../pages/orders';
import addItemForm from '../forms/addItemForm';
import closeOrder from '../forms/closeOrderForm';

const formEvents = () => {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();
    if (e.target.id.includes('submit-order')) {
      // console.warn('CLICKED SUBMIT ORDER', e.target.id);

      const payload = {
        order_name: document.querySelector('#order_name').value,
        phone_number: document.querySelector('#phone_number').value,
        email: document.querySelector('#email').value,
        order_type: document.querySelector('#select-ordertype').value,
        // item_name: 'Maurice',
        // order_total: '',
        // payment_type: '',
        // tip_amount: '',
        uid: '',
        // isFulfilled: 'true',
      };
      createOrder(payload).then(({ name }) => {
        const patchPayLoad = { firebaseKey: name };

        updateOrder(patchPayLoad).then(() => {
          addItemForm().then(closeOrder);
        });
      });
    }
    if (e.target.id.includes('update-order')) {
      const [, firebaseKey] = e.target.id.split('--');
      const payload = {
        order_name: document.querySelector('#order_name').value,
        phone_number: document.querySelector('#phone_number').value,
        email: document.querySelector('#email').value,
        order_type: document.querySelector('#select-ordertype').value,
        // item_name: 'Maurice',
        // order_total: '',
        // payment_type: '',
        // tip_amount: '',
        uid: '',
        // isFulfilled: 'true',
        firebaseKey,
      };
      updateOrder(payload).then(() => {
        getOrders().then(showOrders);
      });
    }
  });
};

export default formEvents;
