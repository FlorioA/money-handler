import React from 'react';
import firebase from 'firebase';

import {Card, Button, Col, Row} from 'react-bootstrap';


export default function ShowExpense({expense}) {
    const deleteExpense = () => {
        const expenseRef = firebase.database().ref('Expense').child(expense.id);
        expenseRef.remove();
    };

    return (
        <div className="expense">
            <Card className="mt-5 text-left">
                <Card.Body>
                    <Row>
                        <Col xs={3}>
                            <Card.Title>{expense.number} €</Card.Title>
                        </Col>
                        <Col xs={7}>
                            <Card.Subtitle className="mt-1 text-muted font-italic">{expense.reason}</Card.Subtitle>
                        </Col>
                        <Col md={2}>
                            <Button onClick={deleteExpense}>Effacer</Button>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </div>
    );
}