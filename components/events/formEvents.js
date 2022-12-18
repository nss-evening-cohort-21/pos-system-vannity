import { createMenuName } from '../../api/menuData';
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
        order_type: document.querySelector('#orderType').value,
        // item_name: 'Maurice',
        // order_total: '',
        // payment_type: '',
        // tip_amount: '',
        uid: '',
        // isFulfilled: document.querySelector('#isFulfilled')
      };
      createOrder(payload).then(({ name }) => {
        const patchPayLoad = { firebaseKey: name };

        updateOrder(patchPayLoad).then(() => {
          addItemForm();
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
        uid: '',
        // isFulfilled: document.querySelector('#isFulfilled'),
        firebaseKey,
      };
      updateOrder(payload).then(() => {
        getOrders().then(showOrders);
      });
    }
    if (e.target.id.includes('submit-item')) {
      const [, firebaseKey] = e.target.id.split('--');
      const payload = {
        name: document.querySelector('#name').value,
        description: document.querySelector('#description').value,
        price: document.queryCommandValue('#price').value,
        uid: '',
        firebaseKey,
      };
      createMenuName(payload).then(({ name }) => {
        const patchPayLoad = { firebaseKey: name };

        updateOrder(patchPayLoad).then(() => {
          closeOrder();
        });
      });
    }
    // if (e.target.id.includes('create-order')) {
    //   const [, firebaseKey] = e.target.id.split('--');
    //   const payload = {
    //     payment_type: document.querySelector('#payment_type').value,
    //     tip: document.querySelector('#tip').value,
    //     uid: '',
    //     firebaseKey,
    //   };
    //   createMenuName(payload).then(({ name }) => {
    //     const patchPayLoad = { firebaseKey: name };

    //     updateMenuName(patchPayLoad).then(() => {
    //       viewRevenue();
    //     });
    //   });
    // }
  });
};

export default formEvents;
