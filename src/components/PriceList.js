import React from 'react';
import IonIcons from 'react-ionicons';


function PriceList(props) {
    let { items, onModifyItem, onDeleteItem } = props;
    console.log(props);
    return (
        <ul className="list-group list-group-flush">
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
                                style={{ backgroundColor: '#007bff', padding: '5px'}} 
                                color={'#fff'}
                                icon={item.category.iconName}
                            />
                        </span>
                        <span className="col-5">{item.title}</span>
                        <span className="col-2 font-weight-bold">
                            {(item.category.type === 'income')? '+': '-'}
                            {item.price}元
                        </span>
                        <span className="clo-2">{item.data}</span>
                        <a 
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
                        </a>
                        <a 
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
                        </a>
                    </li>
                ))
            }
        </ul>
    )

}



export default PriceList;

