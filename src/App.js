import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import PriceList from './components/PriceList';
import ViewTab from './components/ViewTab';



function App() {
  let [tab, setTab]  = useState('list');
  // const items = [{
  //   id: 1,
  //   title: 'ahha',
  //   price: 2,
  //   category: {
  //     type: 'income',
  //     name: 'hah',
  //     iconName: 'ios-plane'
  //   },
  //   data: 1
  // },
  // {
  //   id: 2,
  //   title: 'ahha',
  //   price: 2,
  //   category: {
  //     type: 'income',
  //     name: 'hah',
  //     iconName: 'ios-plane'
  //   },
  //   data: 1
  // }];
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      
      {/* <PriceList 
        items={items}
        onModifyItem={(item) => {alert(item.id)}}
        onDeleteItem={(item => {alert(item.id)})}
      /> */}

      <ViewTab 
        activeTab={tab} 
        onTabChange={
          (currentTab) => {
            setTab(currentTab)
          }
        }
      />

      

    </div>
  );
}

export default App;






