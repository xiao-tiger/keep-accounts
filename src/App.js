import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import PriceList from './components/PriceList';



function App() {
  const items = [{
    id: 1,
    title: 'ahha',
    price: 2,
    category: {
      type: 'income',
      name: 'hah'
    },
    data: 1
  },
  {
    id: 2,
    title: 'ahha',
    price: 2,
    category: {
      type: 'income',
      name: 'hah'
    },
    data: 1
  }];
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a> */}
      </header>
      
      <PriceList 
        items={items}
        onModifyItem={(item) => {alert(item.id)}}
        onDeleteItem={(item => {alert(item.id)})}
      />

    </div>
  );
}

export default App;
