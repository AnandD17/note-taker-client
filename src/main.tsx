import { createRoot } from "react-dom/client";
import Router from "./routes/index.tsx";

import "./index.css";
import { Auth0Provider } from "@auth0/auth0-react";

createRoot(document.getElementById("root")!).render(
  <Auth0Provider
    domain={import.meta.env.VITE_AUTH0_DOMAIN}
    clientId={import.meta.env.VITE_AUTH0_CLIENT_ID}
    authorizationParams={{
      redirect_uri: `${window.location.origin}`,
    }}
    cacheLocation="localstorage"
  >
    <Router />
  </Auth0Provider>
);
