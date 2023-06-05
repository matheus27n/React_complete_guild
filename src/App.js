import React from 'react';

import NewExpense from './components/NewExpense/NewExpense';
import Despensa from './components/despesas/Despensa';






function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ]; // cria um array de objetos para serem usados como despesas

  const addExpenseHandler = expense => { // cria uma função que recebe um objeto como argumento
    console.log('In App.js');
    console.log(expense);
  }; // cria uma função que recebe um objeto como argumento
  
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/> {/* chama o componente NewExpense e passa a função addExpenseHandler como propriedade onAddExpense */}
      <Despensa itens={expenses}/> {/* chama o componente Despensa e passa o array expenses como propriedade itens */}
    </div>
  );
}

export default App;
