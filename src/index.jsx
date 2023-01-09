import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import store from "./redux";
import {App}from './App'

if (process.env.NODE_ENV === "development") {
  const { worker } = await import("./mocks/browser");
  worker.start();
}

const root = ReactDOM.createRoot(document.getElementById("root"));



root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
