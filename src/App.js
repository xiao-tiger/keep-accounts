import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import ViewTab from './components/ViewTab';


function App() {
  let [tab, setTab]  = useState('list');
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
  
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






