// import createOrderForm from '../forms/createOrderForm';

const createOrderButton = () => {
  const domString = '<button id="create-order" class="btn btn-danger">Create Order</button>';
  document.querySelector('#home-buttons').innerHTML = domString;
  // document.querySelector('#create-order').addEventListener('click', createOrderForm());
};

export default createOrderButton;
