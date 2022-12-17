import domBuilder from '../components/shared/domBuilder';
import domEvents from '../components/events/domEvents';
// import formEvents from '../components/events/formEvents';
import logoutButton from '../components/buttons/logoutButton';
import navigationEvents from '../components/events/navEvents';
import navBar from '../components/shared/navBar';
import homePage from '../pages/homePage';

const startApp = () => {
  domBuilder(); // BUILD THE DOM
  domEvents(); // ADD THE EVENT LISTENTERS TO THE DOM
  // formEvents(); // ADD FORM EVENT LISTENTERS TO THE DOM
  navBar(); // DYNAMICALLY ADD THE NAV
  logoutButton(); // ADD THE LOGOUT BUTTON COMPONENT
  navigationEvents(); // ATTACH THE EVENT LISTENERS TO THE NAVBAR
  homePage();
};

export default startApp;
