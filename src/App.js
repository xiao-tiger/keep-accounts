import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import ViewTab from './components/ViewTab';
import MonthPicker from "./components/MonthPicker";


function App() {
  const d = new Date()
  const y = d.getFullYear()
  const m = d.getMonth() + 1
  let [tab, setTab]  = useState('list');
  let [year, setYear] = useState(y)
  let [month, setMonth] = useState(m)

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

      <MonthPicker
        year={year} 
        month={month}
        onChangeDate={ 
          (y, m) => { 
            setYear(y)
            setMonth(m)
          }
        }
      />
    </div>
  );
}

export default App;






