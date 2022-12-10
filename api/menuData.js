import client from '../utils/client';

const endpoint = client.databaseURL;

const getMenuNames = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/menu.json`, {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject)
});

const getSingleMenuName = () => new Promise((resolve, reject) => {
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
const deleteMenuName = () => new Promise ((resolve, reject) => {
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

const createMenuName = () => new Promise ((resolve, reject) => {
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

const updateMenuName = () => new Promise ((resolve, reject) => {
  fetch(`${endpoint}/menu/${firebaseKey}.json`, {
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
  getMenuNames,
  getSingleMenuName,
  deleteMenuName,
  createMenuName,
  updateMenuName,
}