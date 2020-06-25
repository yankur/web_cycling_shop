import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import CartReducer from './redux/reducers';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter as Router } from "react-router-dom";

import './index.css'
import './fonts/HelveticaNeuBold.ttf'

const store = createStore(CartReducer);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>,
  </Provider>,

  document.getElementById("root")
);
