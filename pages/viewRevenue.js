import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const viewRevenue = () => {
  clearDom();
  const domString = ` 
  <div class= "card rev-card">
   <div class= "card-body">
   <h1 class="card-title">Revenue</h1>

   </div>
  </div>`;

  renderToDOM('#view', domString);
};

export default viewRevenue;
