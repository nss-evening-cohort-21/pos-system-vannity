import client from '../utils/client';

const endpoint = client.databaseURL;

const getMenuNames = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/menu.json?orderBy="uid"&equalTo="${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        resolve(Object.values(data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

const getSingleMenuName = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/menu/${firebaseKey}.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const deleteMenuName = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/menu/${firebaseKey}.json`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const createMenuName = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/menu.json`, {
    method: 'POST',

    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const updateMenuName = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/menu/${payload.firebaseKey}.json`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload)
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});
const getMenuByOrderId = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/menu.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        const items = Object.values(data);
        const filteredItems = items.filter((item) => item.orderId === firebaseKey);
        resolve(filteredItems);
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

export {
  getMenuNames,
  getSingleMenuName,
  deleteMenuName,
  createMenuName,
  updateMenuName,
  getMenuByOrderId
};
