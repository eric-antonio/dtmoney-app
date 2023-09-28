import React from 'react';
import ReactDOM from 'react-dom/client';
import{ Model, createServer } from 'miragejs'
import {App} from './App';

createServer({

  models:{
    transactions:Model,
  },

  routes(){
    this.namespace = 'api';

    this.get('/transactions',()=>{
      return this.schema.all('transactions')
    })

    this.post('/transactions',(schema, resquest)=>{
      const data = JSON.parse(resquest.requestBody);

      return schema.create('transactions',data)
    })
  }
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement);root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
