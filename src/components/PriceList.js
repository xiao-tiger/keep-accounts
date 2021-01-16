import React from 'react'
import IonIcons from 'react-ionicons'
import PropTypes from 'prop-types'

function PriceList(props) {
  let { items, onModifyItem, onDeleteItem, stlye } = props
  return (
    <ul className="list-group list-group-flush" style={stlye}>
      {
        items.map(item => (
          <li
            className="list-group-item d-flex justify-content-between align-items-center"
            key={item.id}
          >
            <span className="col-1">
              <IonIcons
                className="rounded-circle"
                fontSize="30px"
                style={{ backgroundColor: '#007bff', padding: '5px' }}
                color={'#fff'}
                icon={item.category.iconName}
              />
            </span>
            <span className="col-5">{item.title}</span>
            <span className="col-2 font-weight-bold">
              {(item.category.type === 'income') ? '+' : '-'}
              {item.price}元
            </span>
            <span className="clo-2">{item.date}</span>
            <span
              className="col-1"
              role="button"
              onClick={() => {
                onModifyItem(item);
              }}
            >
              <IonIcons
                className="rounded-circle"
                fontSize="30px"
                style={{ backgroundColor: '#28a745', padding: '5px' }}
                icon="ios-create-outline"
              />
            </span>
            <span
              className="col-1"
              role="button"
              onClick={() => {
                onDeleteItem(item);
              }}
            >
              <IonIcons
                className="rounded-circle"
                fontSize="30px"
                style={{ backgroundColor: '#dc3545', padding: '5px' }}
                icon="ios-close"
              />
            </span>
          </li>
        ))
      }
    </ul>
  )
}

PriceList.propTypes = {
  items: PropTypes.array.isRequired,
  onModifyItem: PropTypes.func.isRequired,
  onDeleteItem: PropTypes.func.isRequired
}

PriceList.defaultProps = {
  items: () => [],
  onModifyItem: () => { },
  onDeleteItem: () => { }
}


export default PriceList

