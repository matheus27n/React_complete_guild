import React from 'react'; // Importa o React e o useState
import DataDespesa from './DataDespesa';
import Card from '../UI/Card';
import './ItemDespesa.css';


const  ItemDespesa = (props) => {
    return (
        <Card className='expense-item'>
          <DataDespesa date={props.date} />
          <div className='expense-item__description'>
            <h2>{props.title}</h2>
            <div className='expense-item__price'>${props.amount}</div>          </div>
        </Card>
      );
    }

export default ItemDespesa;





