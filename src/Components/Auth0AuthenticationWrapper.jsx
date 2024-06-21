import { Auth0Provider } from '@auth0/auth0-react';

const Auth0AuthenticationWrapper = ({ children }) => {
  const domain=import.meta.env.VITE_AUTH_DOMAIN_URL
  const clientId="JYkG2sa4ZE39ldYCHoFi6XTtkDxdgflR";
  userObjectTrue = true
  const callbackUrl = userObjectTrue ? `${import.meta.env.VITE_WEB_BASE_URL}/` : "asdadsads"
  return (
    <Auth0Provider
    domain={domain}
    clientId={clientId}
    authorizationParams={{
      redirect_uri: {callbackUrl}
    }}
    >
      {children}
    </Auth0Provider>
  );
};
export default Auth0AuthenticationWrapper;