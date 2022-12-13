import { getSingleOrder, deleteOrder, getOrderMenuName } from './orderData';
import { getSingleMenuName, deleteMenuName } from './menuData';

const getMenuNameDetails = (firebaseKey) => new Promise((resolve, reject) => {
  getSingleMenuName(firebaseKey).then((menuNameObject) => {
    getSingleOrder(menuNameObject.order_id)
      .then((orderObject) => resolve({ ...menuNameObject, orderObject }));
  }).catch(reject);
});

const getOrderDetails = (firebaseKey) => new Promise((resolve, reject) => {
  getSingleOrder(firebaseKey).then((orderObject) => {
    getOrderMenuName(firebaseKey)
      .then((menuNameArray) => resolve({ ...orderObject, menuNameArray }));
  }).catch(reject);
});

const deleteOrderMenuNameRelationship = (firebaseKey) => new Promise((resolve, reject) => {
  getOrderMenuName(firebaseKey).then((orderMenuNameArray) => {
    const deleteMenuNamePromises = orderMenuNameArray.map((menuName) => deleteMenuName(menuName.firebaseKey));

    Promise.all(deleteMenuNamePromises).then(() => {
      deleteOrder(firebaseKey).then(resolve);
    });
  }).catch(reject);
});

export { getOrderDetails, getMenuNameDetails, deleteOrderMenuNameRelationship };
