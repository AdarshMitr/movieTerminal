import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';

import { store } from './features/store';
import { HashRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

   <React.StrictMode>

    <Provider store={store}>
    <HashRouter>
    <App />
    </HashRouter>
    </Provider>
    
  </React.StrictMode>
 
 
);


