import React, { useState } from 'react';
import './Expenses.css'
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter';

function Expenses(props) {
    useState();
    const [filteredYear, setFilteredYear] = useState('2022');
    const filterChangeHandler = (selectedYear) => {
       setFilteredYear(selectedYear); 
    }
    
    return(
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onFilterChange={filterChangeHandler}/>
            {props.items.map(expense =>(
                <ExpenseItem 
                    title = {expense.title} 
                    amount = {expense.amount} 
                    date = {expense.date} 
                />
            ))}
        </Card>
    )
}

export default Expenses;