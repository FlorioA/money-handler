import React, { useState, useEffect } from 'react';
import firebase from 'firebase';

import ShowExpense from '../atoms/ShowExpense';
import CreateExpense from '../atoms/CreateExpense';

import {Container} from 'react-bootstrap';


export default function Expenses() {
    const [expenseList, setExpenseList] = useState('');

    useEffect(() => {
        const expenseRef = firebase.database().ref('Expense');
        expenseRef.on('value', (snapshot) => {
            const expenses = snapshot.val();
            const expenseList = [];
            for (let id in expenses) {
                expenseList.push({id, ...expenses[id]});
            }
            setExpenseList(expenseList);
        });
    }, []);

    console.log(expenseList);

    return (
        <div className="expenses">
            <Container>
                <CreateExpense/>
            </Container>

            <Container>
                {expenseList
                    ? expenseList.map((expense, index) => <ShowExpense expense={expense} key={index} />)
                    : ''
                }
            </Container>
        </div>
    );
}