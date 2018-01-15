import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import manageNavBar from './reducers/manageNavBar'
import App from './App';
import registerServiceWorker from './registerServiceWorker';

export function configureStore(){
  return createStore(manageNavBar, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
};

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App store={store}/>
  </Provider>, document.getElementById('root'));
registerServiceWorker();
