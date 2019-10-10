import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// Tailwind
import "./styles/tailwind.css";
// Redux Config
import { Provider } from "react-redux";
import configureStore from "./Persistor";
import { PersistGate } from "redux-persist/integration/react";
// instanntiate the persist object
const { store, persistor } = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
