import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<Auth0Provider
    domain="dev-dwtvfqfln7z0evht.us.auth0.com"
    clientId="JYkG2sa4ZE39ldYCHoFi6XTtkDxdgflR"
    useRefreshTokens={true}
    cacheLocation="localstorage"
    authorizationParams={{
      redirect_uri: `${import.meta.env.VITE_WEB_BASE_URL}/checkUserSettings`,
      audience: `https://${import.meta.env.VITE_AUTH_DOMAIN_URL}/api/v2/`,
//      scope: "read:current_user update:current_user_metadata"
    }}
  >
        <App />
      </ Auth0Provider >
  </React.StrictMode>,
)
