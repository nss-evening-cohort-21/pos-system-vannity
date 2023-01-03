import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';
// import { emptyItems } from './orders';

const viewOrderDetails = (orderObject, menuNameArray) => {
  clearDom();
  const string = `
      <h1>Order Name: ${orderObject.order_name}</h1>
    <h1 id="orderTotal">Order Total: </h1>
    <h2 class="dollarSign">$</h2>
    <div class="card">
    <div class="card-body">
      <div class="item-cards" id="itemCards"></div>
      `;
  renderToDOM('#form-container', string);

  let domString = '';
  menuNameArray.forEach((item) => {
    domString += `<div class="card">
        
              <div class="card-body" style="height: 300px;">
                <h5 class="card-title">Item: ${item.name}</h5>
                <p>Price:$ ${item.price}</p>`;
    if (orderObject.isFulfilled === true) {
      domString += `
                <i id="edit-Item-btn--${item.firebaseKey}" class="logout-btn fas  btn btn-info"><i class="fas fa-edit"></i> Edit</i>
                
                <i id="delete-Item-btn--${item.firebaseKey}" class="logout-btn btn btn-danger fas"><i class="fas fa-trash-alt"></i> Delete</i>
              </div>
        
            </div>`;
    }
  });
  if (orderObject.isFulfilled === true) {
    domString += `
          <div id="item-buttons">
            <button id="add-item-btn--${orderObject.firebaseKey}" class="btn btn-success">Add Item</button>
            <button id="go-to-payment-btn--${orderObject.firebaseKey}" class="btn btn-primary">Go to Payment</button>
          </div>`;
  }
  renderToDOM('#itemCards', domString);
};

export default viewOrderDetails;
