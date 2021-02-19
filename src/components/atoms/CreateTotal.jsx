import React, { useState } from 'react';
import firebase from 'firebase';

import {Card, Form, Row, Col, Button} from 'react-bootstrap';

export default function CreateTotal(currentTotal) {
    console.log(currentTotal);
    const [total, setTotal] = useState('');

    const handleTotalOnChange = (e) => {
        setTotal(e.target.value);
    };

    const newTotal = () => {
        const totalRef = firebase.database().ref('Total');

        if (currentTotal && currentTotal.length === 1) {
            totalRef.child(currentTotal[0].id).update({
                total: total
            });
        } else {
            if (currentTotal.length > 1) {
                for (let i = 1; i < currentTotal.length; i++) {
                    totalRef.child(currentTotal[i].id).remove();
                }
            }
            const newTotal = {
                total
            };
            totalRef.push(newTotal);
        }
        setTotal('');
    };


    return (
        <div className="create-total">
            <Card className="mt-5">
                <Card.Body>
                    <Form inline>
                        <Row>
                            <Col xs={8}>
                                <Form.Control type="number" onChange={handleTotalOnChange} value={total} placeholder="Ajouter/modifier Total"/>
                            </Col>
                            <Col xs={4}>
                                <Button onClick={newTotal}>Total</Button>
                            </Col>
                        </Row>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    );
}