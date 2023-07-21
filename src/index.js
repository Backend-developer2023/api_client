import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, HashRouter } from "react-router-dom";
import { GoogleOAuthProvider } from '@react-oauth/google';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <HashRouter>
      <GoogleOAuthProvider clientId="266918501917-gvvkic48n3ri945d50cadafhj1u4d42u.apps.googleusercontent.com">
        <App />
      </GoogleOAuthProvider>
    </HashRouter>
  </>
);

reportWebVitals();
