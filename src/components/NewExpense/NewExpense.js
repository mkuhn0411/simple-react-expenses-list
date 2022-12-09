import React, { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
    const [expenseOpen, setExpenseOpen] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }

        props.onAddExpense(expenseData);
    }

    const setExpenseModal = boolean => {
        setExpenseOpen(boolean);
    }

    return (
        <div className="new-expense">
            {!expenseOpen && <button onClick={() => setExpenseModal(true)}>Add new expense</button>}
            {expenseOpen && <ExpenseForm handleExpenseModal={setExpenseModal} newExpense={expenseOpen} onSaveExpenseData={saveExpenseDataHandler}/>}
        </div>
    )
}

export default NewExpense;