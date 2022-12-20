import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';
import { getSingleOrder } from '../api/orderData';

const viewOrderDetails = (firebaseKey) => {
  clearDom();
  // order ID, orders obj, order items with order
  // putting data into a form
  getSingleOrder(firebaseKey).then((obj) => {
    // get single order with firebasekey
    // make another firebase that will get order items
    // add up the prices of the items
    let domString = '';

    domString += `
      <h1>Order Name: ${obj.order_name}</h1>
    <h1>Order Total: </h1>
    <h2 class="dollarSign">$</h2>
    <div class="card">
    <div class="card-body">
      '<button class="btn btn-success btn-lg mb-4" id="add-item-btn">Add Item</button>
      <button class="btn btn-primary btn-lg mb-4" id="go-to-payment-btn">Go to Payment</button>'
      `;

    const itemCards = (itemArray) => {
      let domString = '';
      itemArray.forEach((item) => {
        domString += `<div class="card">
          
                <div class="card-body" style="height: 300px;">
                  <h5 class="card-title">Item: ${item.name}</h5>
                  <p>Price:$ ${item.price}</p>
                
                  
                  <i id="edit-Item-btn--${item.firebaseKey}" class="logout-btn fas  btn btn-info"><i class="fas fa-edit"></i> Edit</i>
                  
                  <i id="delete-Item-btn--${item.firebaseKey}" class="logout-btn btn btn-danger fas"><i class="fas fa-trash-alt"></i> Delete</i>
                </div>
          
              </div>`;
      });
      renderToDOM('#view', domString);
    };
    renderToDOM('#orderItems', domString);
  });
};

export default viewOrderDetails;
