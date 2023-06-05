import React, { useState } from 'react'; // Importa o React e o useState
import DataDespesa from './DataDespesa';
import Card from '../UI/Card';
import './ItemDespesa.css';


function ItemDespesa(props) {
    const [title, setTitle] = useState(props.title); // Cria um estado para o titulo
   
    const clickHandler = () => { // Função para alterar o titulo
        setTitle('Updated!'); // Altera o titulo
        console.log(title); // Mostra o titulo no console
    };

    return (
        <Card className = "expense-item">
            <DataDespesa date={props.date}/>
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
            <button onClick = {clickHandler}>Change Title</button>
        </Card>
    );
}

export default ItemDespesa;





