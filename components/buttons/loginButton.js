import { signIn } from '../../utils/auth';

// GOOGLE LOGIN BUTTON
const loginButton = () => {
  const domString = '<h1 id="welcome">Hip Hop Pizza and Wangs</h1><button id="google-auth" class="btn btn-danger">Login to Get Started</button>';
  document.querySelector('#app').innerHTML = domString;
  document.querySelector('#google-auth').addEventListener('click', signIn);
};

export default loginButton;
