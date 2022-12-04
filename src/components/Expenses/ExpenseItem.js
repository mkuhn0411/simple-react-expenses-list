import React, { useState } from 'react';
import ExenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {

    const  [title, setTitle] = useState(props.title);
    const clickHandler = () => {
        setTitle('Updated');
    }

    return (
        <Card className="expense-item">
            <ExenseDate date={props.date}/>
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">{props.amount}</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </Card>
    )
        
}

export default ExpenseItem;