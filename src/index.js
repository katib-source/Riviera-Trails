import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Ensure visitors always receive the freshest deploy. The CRA service worker
// aggressively precaches the app shell and serves stale content until every
// tab is closed — undesirable for a frequently-updated marketing site — so we
// unregister it (this also cleans up any SW previously installed on a device).
serviceWorkerRegistration.unregister();
