import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const viewRevenue = (array) => {
  clearDom();
  const orderTotalArray = array.map((rev) => rev.order_total).reduce((total, newNumber) => total + newNumber, 0);
  const tipAmountArray = array.map((rev) => rev.tip_amount).reduce((total, newNumber) => total + newNumber, 0);
  const domString = ` 
  <div class= "orderTotalArray">
   <div class= "card-body">
   <h1 class="card-title">Totals</h1>
   <h2 class="list-group-item"> Revenue Total: $${orderTotalArray}</2>
   <h2 class="list-group-item">Tip total: $${tipAmountArray}</2>


   </div>
  </div>`;

  renderToDOM('#view', domString);
};
export default viewRevenue;
