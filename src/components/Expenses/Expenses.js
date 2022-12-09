import React, { useState } from 'react';
import ExpensesList from './ExpensesList';
import ExpensesFilter from './ExpensesFilter';
import ExpensesChart from './ExpensesChart';
import Card from '../UI/Card'
import './Expenses.css';

const Expenses = props => {
    const [filteredYear, setFilteredYear] = useState('Year');

    const expensesForYear = filteredYear === 'Year' ? props.items : props.items.filter(item => item.date.getFullYear().toString() === filteredYear);

    const filterChangeHandler = (year) => {
        setFilteredYear(year);
    }

    return(
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
                <ExpensesChart yearExpenses={expensesForYear}/>
                <ExpensesList items={expensesForYear}/>   
            </Card>
        </div>
    )
}

export default Expenses;