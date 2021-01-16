import React from 'react'
import logo from '../logo.svg'
import '../App.css'
import ViewTab from '../components/ViewTab'
import MonthPicker from '../components/MonthPicker'
import TotalPrice from '../components/TotalPrice'
import PriceList from '../components/PriceList'
import CreateBtn from '../components/CreateBtn'
import { padLeft } from '../utility'

const items = [
  {
    id: 1,
    title: '理财收入',
    price: 200,
    date: '2021-12-02',
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
    date: '2021-11-02',
    category: {
      id: '2',
      name: '理财',
      type: 'income',
      iconName: 'logo-yen'
    }
  },
  {
    id: 3,
    title: '理财收入',
    price: 100,
    date: '2020-12-02',
    category: {
      id: '2',
      name: '理财',
      type: 'outcome',
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
    
    const newItems = items.filter(item => {
      return item.date.includes(`${year}-${padLeft(month)}`)
    })

    newItems.forEach(item => {
      if (item.category.type === 'income') income += item.price
      if (item.category.type === 'outcome') outcome += item.price
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
                onChangeDate={ (y, m) => this.changeDate(y, m)}
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
          onTabChange={ currentTab => this.changeView(currentTab) }
        />

        <CreateBtn style={ {marginBottom: '20px'} } onClick={ e => { this.createItem() } } />
        { 
          tab === 'list' &&
          <PriceList 
            items={newItems}
            onModifyItem={ e => this.modifyItem(e) }
            onDeleteItem={ e => this.deleteItem(e) }
          />
        }

        {
          tab === 'chart' && 
          <h3>图表</h3>
        }

      </React.Fragment>
    )
  }

  changeView(currentTab) {
    this.setState({
      tab: currentTab
    })
  }

  changeDate(y, m) {
    this.setState({
      year: y,
      month: m
    })
  }

  modifyItem() {}

  createItem() {}

  deleteItem() {}

}

export default Home

