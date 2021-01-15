import React from 'react'
import logo from '../logo.svg'
import '../App.css'
import ViewTab from '../components/ViewTab'
import MonthPicker from '../components/MonthPicker'
import TotalPrice from '../components/TotalPrice'
import PriceList from '../components/PriceList'
import CreateBtn from '../components/CreateBtn'

const items = [
  {
    id: 1,
    title: '理财收入',
    price: 200,
    date: '2020-12-2',
    category: {
      id: '2',
      name: '理财',
      type: 'income',
      iconName: 'logo-yen'
    }
  },
  {
    id: 2,
    title: '理财收入',
    price: 300,
    date: '2020-11-2',
    category: {
      id: '2',
      name: '理财',
      type: 'income',
      iconName: 'logo-yen'
    }
  }
]
class Home extends React.PureComponent {

  constructor(props) {
    super(props)
    this.state = {
      year: new Date().getFullYear(),
      month: new Date().getMonth() + 1,
      tab: 'list',
      items: items
    }
  }

  render() {
    const { year, month, tab, items } = this.state
    const monthStyle = {margin: '-40px 0 0 60px'}
    let income = 0
    let outcome = 0
    items.forEach(item => {
      if (item.category.type === 'income') income += item.price
      if (item.category.type === 'outcome') income -= item.price
    })
    return (
      <React.Fragment>
        <header className="header-box">
          <div className="row mb-5 justify-content-center">
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          <div className="row cfff">
            <div className="col">
              <MonthPicker
                year={year} 
                month={month}
                style={monthStyle}
                onChangeDate={ 
                  (y, m) => { 
                    this.setState({
                      year: y,
                      month: m
                    })
                  }
                }
              />
            </div>
            <div className="col">
              <TotalPrice 
                income={income}
                outcome={outcome}
              />
            </div>
          </div>
        </header>

        <ViewTab 
          activeTab={tab} 
          onTabChange={
            (currentTab) => {
              this.setState({
                tab: currentTab
              })
            }
          }
        />

        <CreateBtn style={ {marginBottom: '20px'} } onClick={ (e) => {  } } />

        <PriceList 
          items={items}
        />
      </React.Fragment>
    )
  }
}

export default Home

