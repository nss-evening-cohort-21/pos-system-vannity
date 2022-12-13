import client from '../utils/client';

const endpoint = client.databaseURL;

const getOrders = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/order.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

const getSingleOrder = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/order/${firebaseKey}.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});
const deleteOrder = (firebaseKey) => new Promise ((resolve, reject) => {
  fetch(`${endpoint}/order/${firebaseKey}.json`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const createOrder = (payload) => new Promise ((resolve, reject) => {
  fetch(`${endpoint}/order.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload)
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const updateOrder = (payload) => new Promise ((resolve, reject) => {
  fetch(`${endpoint}/order/${payload.firebaseKey}.json`, {
   method: 'PATCH',
   headers: {
    'Content-Type': 'application/json', 
  },
  body:JSON.stringify(payload)
})
.then((response) => response.json())
.then((data) => resolve(data))
.catch(reject);
});


export {
  getOrders,
  getSingleOrder,
  createOrder,
  deleteOrder,
  updateOrder,
}
