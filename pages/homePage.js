import clearDOM from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const homePage = () => {
  clearDOM();
  const domString = `<h1>Welcome,!</h1>
  <button type="button" class="btn btn-secondary btn-lg home-button" id="home-view-orders">View Orders</button>
  <button type="button" class="btn btn-secondary btn-lg home-button" id="home-create-order">Create an Order</button>
  <button type="button" class="btn btn-secondary btn-lg home-button" id="home-view-revenue">View Revenue</button>`;

  renderToDOM('#view', domString);
};

export default homePage;
