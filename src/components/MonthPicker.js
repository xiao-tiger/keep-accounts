import React from 'react'
import PropTyps from 'prop-types'

import { padLeft, range } from '../utility'


class MonthPicker extends React.PureComponent {

  constructor(props) {
    super(props)
    this.state = {
      isOpen: false,
      selectedYear: props.year,
      selectedMonth: props.month
    }
  }

  render() {
    const { year, month } = this.props;
    const { isOpen, selectedYear, selectedMonth } = this.state
    const yearRange = range(9, -4).map(number => number + year)
    const monthRange = range(12, 1)
    return (
      <div className="dropdown month-picker-component">
        <h4>选择月份</h4>
        <button 
          className="btn btn-lg btn-secondary dropdown-toggle"
          onClick={ e => this.toggleDropdown(e) }
        >
          {`${year}年 ${padLeft(month)}月`}
        </button>
        { isOpen && 
          <div className="dropdown-menu" style={{display: 'block'}}>
            <div className="row">
              <div className="col border-right">
                {
                  yearRange.map((item, index) => {
                    return (
                      <span
                        key={index} 
                        className={ (item === selectedYear) ? 'dropdown-item active pointer' : 'dropdown-item pointer' }
                        onClick={ e => this.selectYear(e, item) }
                      >
                        { item } 年
                      </span>
                    )
                  })
                }
              </div>
              <div className="col">
                {
                  monthRange.map((item, index) => {
                    return (
                      <span 
                        key={index} 
                        className={ (item === selectedMonth) ? 'dropdown-item active pointer' : 'dropdown-item pointer' }
                        onClick={ e => this.selectMonth(e, item) }
                      >
                        {padLeft(item)} 月
                      </span>
                    )
                  })
                }
              </div>
            </div>
          </div> 
        }
      </div>
    )
  }

  toggleDropdown(e) {
    e.preventDefault()
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  selectYear(event, year) {
    event.preventDefault()
    this.setState({
      selectedYear: year
    })
  }

  selectMonth(event, month) {
    event.preventDefault()
    this.setState({
      selectedMonth: month,
      isOpen: false
    })
    this.props.onChangeDate(this.state.selectedYear, month)
  }
}

MonthPicker.propTyps = {
  year: PropTyps.number.isRequired,
  month: PropTyps.number.isRequired,
  onChangeDate: PropTyps.func.isRequired
}

MonthPicker.defaultProps = {
  year: new Date().getFullYear(),
  month: new Date().getMonth() + 1,
  onChangeDate: () => {}
}


export default MonthPicker
