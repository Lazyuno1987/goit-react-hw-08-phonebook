import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'components/App';
import './index.css';
 import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import 'modern-normalize/modern-normalize.css';
 import { PersistGate } from 'redux-persist/integration/react';
 import {store,  persistor } from './redux/store';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   
    <Provider store={store}>
      <PersistGate loading={null}  persistor={persistor} >
        <BrowserRouter basename="/goit-react-hw-08-phonebook/">
          <App />
           </BrowserRouter>
      </PersistGate>
      </Provider>
     
  </React.StrictMode>,

);
