import React, { useState } from 'react';
import firebase from 'firebase';

import {Card, Form, Button} from 'react-bootstrap';

export default function CreateExpense() {
    const [number, setNumber] = useState('');
    const [reason, setReason] = useState('');

    const handleNumberOnChange = (e) => {
        setNumber(e.target.value);
    };
    const handleReasonOnChange = (e) => {
        setReason(e.target.value);
    };
    const createExpense = () => {
        const expenseRef = firebase.database().ref('Expense');
        const expense = {
            number,
            reason
        };
        expenseRef.push(expense);

        setNumber('');
        setReason('');
    };

    return (
        <div className="expense">
            <Card className="mt-5">
                <Card.Body>
                    <Form>
                        <Form.Group controlId="formExpenseCost">
                            <Form.Label>Dépensés</Form.Label>
                            <Form.Control type="number" onChange={handleNumberOnChange} value={number}/>
                        </Form.Group>

                        <Form.Group controlId="formExpenseReason">
                            <Form.Label>Raison</Form.Label>
                            <Form.Control type="text" onChange={handleReasonOnChange} value={reason}/>
                        </Form.Group>

                        <Button onClick={createExpense}>
                            Ajouter dépense
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    );
}