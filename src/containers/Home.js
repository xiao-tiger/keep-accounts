import React from 'react'
import logo from '../logo.svg'
import '../App.css'
import ViewTab from '../components/ViewTab'
import MonthPicker from '../components/MonthPicker'
import TotalPrice from '../components/TotalPrice'

class Home extends React.PureComponent {

  constructor(props) {
    super(props)
    this.state = {
      year: new Date().getFullYear(),
      month: new Date().getMonth() + 1,
      tab: 'list'
    }
  }

  render() {
    const { year, month, tab } = this.state
    const monthStyle = {padding: '0 0 40px 60px', marginTop: '-40px'}
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
                income={202}
                outcome={345}
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
      </React.Fragment>
    )
  }
}

export default Home

