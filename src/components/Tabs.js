import React from 'react'


class Tabs extends React.PureComponent {

  render() {
    const { children, onChangeTab, activeIndex } = this.props

    return (
      <ul className="nav nav-tabs nav-fill my-4">
        {
          children.map((item, index) => {
            return (
              <li key={index} className="nav-item" onClick={ e => onChangeTab(index) }>
                <span
                  className={ activeIndex === index ? 'nav-link btn-primary' : 'nav-link'}
                  role="button"
                >
                  { item }
                </span>
              </li>
            )
          })
        }
      </ul>
    )
  }
}


export default Tabs
