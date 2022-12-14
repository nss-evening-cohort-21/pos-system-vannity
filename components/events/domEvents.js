import createOrderForm from '../forms/createOrderForm';

const domEvents = () => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('create-order')) {
      createOrderForm();
    }
  });
};

export default domEvents;
