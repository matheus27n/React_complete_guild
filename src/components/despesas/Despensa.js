import React , {useState} from 'react';

import ItemDespesa from './ItemDespesa';
import FiltroDespesa from './FiltroDespesa';
import Card from '../UI/Card';
import './Despensa.css';

function Despensa(props){
    const [filteredYear, setFilteredYear] = useState('2023'); // useState retorna um array com 2 elementos, o primeiro é o valor atual e o segundo é uma função que pode ser usada para atualizar o valor atual 

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    }
    
    return(
        <div>
         <Card className="expenses">
          <FiltroDespesa selected={filteredYear} onChangeFilter={filterChangeHandler} />
        
          {props.itens.map((despesa) => ( // map() é um método de array que percorre cada elemento do array e retorna um novo array com os elementos modificados de acordo com a função passada como parâmetro
             <ItemDespesa 
                title={despesa.title} 
                amount={despesa.amount} 
                date={despesa.date}
                />
            ))}
          </Card>
         </div>
    );
}
export default Despensa;