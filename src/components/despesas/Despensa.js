import ItemDespesa from './ItemDespesa';
import Card from '../UI/Card';
import './Despensa.css';

function Despensa(props){
    return <Card className="expenses">
        <ItemDespesa
         title={props.itens[0].title}
         amount={props.itens[0].amount}
          date={props.itens[0].date}
         />
       <ItemDespesa
        title={props.itens[1].title}
        amount={props.itens[1].amount}
        date={props.itens[1].date}
       />
       <ItemDespesa
        title={props.itens[2].title}
        amount={props.itens[2].amount}
        date={props.itens[2].date}
       />
       <ItemDespesa
        title={props.itens[3].title}
        amount={props.itens[3].amount}
        date={props.itens[3].date}
       />
    </Card>
}
export default Despensa;