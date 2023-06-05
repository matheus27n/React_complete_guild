import React from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {

    const saveExpenseDataHandler = (enteredExpenseData) => { // recebe o objeto entradaUsuario
        const expenseData = { // cria um objeto com os valores inseridos pelo usuário
            ...enteredExpenseData, // copia todos os valores do objeto entradaUsuario
            id: Math.random().toString() // cria um id aleatório
        };
        props.onAddExpense(expenseData); // chama a função addExpenseHandler do componente pai App.js e passa o objeto expenseData como argumento
    };

    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} /> {/* chama a função saveExpenseDataHandler e passa o objeto expenseData como argumento */}
        </div>
    );

};

export default NewExpense;

