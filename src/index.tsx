import React from "react";
import ReactDOM from "react-dom";
import App from './App';
import {Provider} from 'mobx-react'

import stores from './stores'

import 'normalize.css';
import './index.scss';

ReactDOM.render(
  <React.StrictMode>
    <Provider {...stores}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

