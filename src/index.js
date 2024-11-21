import React from "react";
import ReactDOM from "react-dom/client";
import App from "./componentes/funcionales/App";
import "./styles/styles.css";
import "../src/componentes/clase/i18n";
import { I18nextProvider } from "react-i18next";
import i18n from "./componentes/clase/i18n";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>
  </React.StrictMode>
);
