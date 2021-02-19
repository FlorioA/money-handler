import React from 'react';
import firebase from 'firebase';

import {Card, Row, Col} from 'react-bootstrap';

export default function ShowTotal({currentTotal}) {
    console.log(currentTotal);
    return (
        <div className="show-total">
            <Card className="mt-5 text-left">
                <Card.Body>
                    <Row>
                        <Col xs={3}>
                            <Card.Title>{currentTotal[0]} €</Card.Title>
                        </Col>
                        <Col xs={7}>
                            <Card.Subtitle className="mt-1 text-muted font-italic"></Card.Subtitle>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </div>
    );
}