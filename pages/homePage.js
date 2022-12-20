import clearDOM from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const homePage = (user) => {
  clearDOM();
  const domString = `<h1>Welcome,${user.displayName}!</h1>
  <button type="button" class="btn btn-secondary btn-lg-one home-button" id="home-view-orders">View Orders</button>
  <button type="button" class="btn btn-secondary btn-lg-two home-button" id="home-create-order">Create an Order</button>
  <button type="button" class="btn btn-secondary btn-lg-three home-button" id="home-view-revenue">View Revenue</button>`;

  renderToDOM('#view', domString);
};

export default homePage;
