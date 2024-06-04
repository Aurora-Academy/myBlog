import "bootstrap/dist/css/bootstrap.min.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { BlogContextProvider } from "./contexts/BlogContext";
import { Provider } from "react-redux";
import { store } from "./store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <BlogContextProvider>
          <App />
        </BlogContextProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
