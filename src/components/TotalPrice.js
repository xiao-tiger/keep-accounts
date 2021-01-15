import React from 'react'
import PropTypes from 'prop-types'


function TotalPrice({ income, outcome }) {

  return (
    <div className="row">
      <div className="col cfff">
        <h5 className="income">收入 : { income }</h5>
      </div>
      <div className="col cfff">
        <h5 className="outcome">支出 : { outcome }</h5>
      </div>
    </div>
  )
}

TotalPrice.propTypes = {
  income: PropTypes.number.isRequired,
  outcome: PropTypes.number.isRequired
}

export default TotalPrice
