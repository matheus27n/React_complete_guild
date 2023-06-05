import './DataDespesa.css';

function DataDespesa(props){
    const month = props.date.toLocaleString('en-US', { month: 'long' }); // pega o mês da data
    const day = props.date.toLocaleString('en-US', { day: '2-digit' }); // pega o dia da data
    const year = props.date.getFullYear(); // pega o ano da data

    return(
    <div className="expense-date">
        <div className="expense-date__month">{month}</div>
        <div className="expense-date__year">{day}</div>
        <div className="expense-date__day">{year}</div>
    </div>
    );
}

export default DataDespesa;