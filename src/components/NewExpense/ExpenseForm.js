        import React, {useState} from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [tituloInserido, setTituloInserido] = useState(''); // useState retorna um array com 2 elementos, o primeiro é o valor atual do estado e o segundo é uma função que permite alterar o valor do estado
    const [amountInserido, setAmountInserido] = useState(''); // useState retorna um array com 2 elementos, o primeiro é o valor atual do estado e o segundo é uma função que permite alterar o valor do estado
    const [dateInserido, setDateInserido] = useState(''); // useState retorna um array com 2 elementos, o primeiro é o valor atual do estado e o segundo é uma função que permite alterar o valor do estado
   
    // useState[entradaUsuario, setEntradaUsuario]({
    //      tituloInserido: '',
    //      amountInserido: '',
    //      dateInserido: ''
    //});

    const titleChangeHandler = (event) => { // event é um objeto que contém informações sobre o evento que ocorreu
       //ARMAZENAR EM UMA VARIAVEL O VALOR DO INPUT
       setTituloInserido(event.target.value); // altera o valor do tituloInserido
       // setEntradaUsuario({
        //      ...entradaUsuario, // copia todos os valores do objeto entradaUsuario
        //      tituloInserido: event.target.value // altera o valor do tituloInserido
       //});
       //setEntradaUsuario((prevState) => { // prevState é o estado anterior
       //       return {...prevState, tituloInserido: event.target.value}; // altera o valor do tituloInserido
       //     }
       // );
    };

    const amountChangeHandler = (event) => { // event é um objeto que contém informações sobre o evento que ocorreu
        setAmountInserido(event.target.value); // altera o valor do amountInserido
       // setEntradaUsuario({
       //     ...entradaUsuario, // copia todos os valores do objeto entradaUsuario
       //     amountInserido: event.target.value // altera o valor do amountInserido
       // })
    };

    const dateChangeHandler = (event) => { // event é um objeto que contém informações sobre o evento que ocorreu
        setDateInserido(event.target.value); // altera o valor do dateInserido
       // setEntradaUsuario({
       //     ...entradaUsuario, // copia todos os valores do objeto entradaUsuario
       //     dateInserido: event.target.value // altera o valor do dateInserido
       // })        
    };
    const submitHandler = (event) => {
        event.preventDefault(); // previne que a página seja recarregada
        
        const expenseData = { // cria um objeto com os valores inseridos pelo usuário
            titulo: tituloInserido, // tituloInserido é o valor atual do estado
            amount: amountInserido, // amountInserido é o valor atual do estado
            date: new Date(dateInserido) // dateInserido é o valor atual do estado
    };
        props.onSaveExpenseData(expenseData); // chama a função saveExpenseDataHandler do componente pai NewExpense.js e passa o objeto expenseData como argumento 
        setTituloInserido(''); // altera o valor do tituloInserido
        setAmountInserido(''); // altera o valor do amountInserido
        setDateInserido(''); // altera o valor do dateInserido   
}; 

    return(
        <form onSubmit={submitHandler}> 
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Titulo</label>
                    <input 
                        type="text" 
                        value={tituloInserido} 
                        onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Valor</label>
                    <input 
                        type="number" 
                        min="0.01" 
                        step="0.01" 
                        value={amountInserido}
                        onChange={amountChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Data</label>
                    <input 
                        type="date" 
                        min="2019-01-01" 
                        max="2022-12-31" 
                        value={dateInserido}
                        onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Adicionar Despesa</button>
            </div>
        </form>
    );
};
export default ExpenseForm;