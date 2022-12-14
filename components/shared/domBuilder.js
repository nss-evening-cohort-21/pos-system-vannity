import renderToDOM from '../../utils/renderToDom';

const domBuilder = () => {
  const domString = `
  <div id="navigation"></div>
  <div id="main-container">
    <div id="form-container"></div>
    <div id="home-buttons">
      <button id="home-view-orders">View Orders</button>
      <button id="home-create-order">Create an Order</button>
      <button id="home-view-revenue">View Revenue</button>
    </div>
    <div id="store"></div>
    <div id="view"></div>
  </div>`;

  renderToDOM('#app', domString);
};

export default domBuilder;
