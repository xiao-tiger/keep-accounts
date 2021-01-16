import React from 'react'
import Tabs from '../components/Tabs'
import PriceForm from '../components/PriceForm'
import CategorySelect from '../components/CategorySelect'

class Create extends React.PureComponent {

  constructor(props) {
    super(props)

    this.state = {
      activeIndex: 0
    }
  }

  render() {
    const { activeIndex } = this.state
    return (
      <div>
        <Tabs activeIndex={activeIndex} onChangeTab={ index => this.changeTab(index) }>
          <span>支出</span>
          <span>收入</span>
        </Tabs>
        <CategorySelect categories={[]} />
        <PriceForm />
      </div>
    )
  }

  changeTab(index) {
    this.setState({
      activeIndex: index
    })
  }
}

export default Create
