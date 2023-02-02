import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';




import { Auth0Provider } from '@auth0/auth0-react'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //component
  <Auth0Provider 
    domain='dev-vogf5s3j.us.auth0.com'
    clientId='5UC8hCyPgzNxNVn8PGSHArF8tZhurZEB'
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>

  // </React.StrictMode>
);


