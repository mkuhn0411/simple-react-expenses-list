import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card'
import './Expenses.css';

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');

    const expensesForYearArr = props.items.filter(item => item.date.getFullYear().toString() === filteredYear);

    const filterChangeHandler = (year) => {
        setFilteredYear(year);
    }
    
    return(
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
                {expensesForYearArr.map((item, index) => (
                    <ExpenseItem 
                        title={item.title}
                        amount={item.amount}
                        date={item.date}
                        key={item.id}
                    />
                ))}
            </Card>
        </div>
    )
}

export default Expenses;