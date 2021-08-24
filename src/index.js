import React from 'react';
import ReactDOM from 'react-dom';
import rootReducer from "./redux/reducers/rootReducer"
import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import App from './App';
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/style/currency-img.css";
import "./style/main.css";

const store = createStore(rootReducer, compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider >,
  document.getElementById('root')
);
