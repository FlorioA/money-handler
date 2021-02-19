import React, {useState, useEffect} from 'react';
import firebase from 'firebase';

import {Card, Form, Button, Container, Row, Col} from 'react-bootstrap';

import ShowTotal from '../atoms/ShowTotal';
import CreateTotal from '../atoms/CreateTotal';

export default function Total() {
    const [currentTotal, setCurrentTotal] = useState('');

    useEffect(() => {
        const totalRef = firebase.database().ref('Total');
        totalRef.on('value', (snapshot) => {
            const totals = snapshot.val();
            let currentTotal = [];
            for (let id in totals) {
                currentTotal.push({id, ...totals[id]});
            }
            setCurrentTotal(currentTotal);
        });
    }, []);


    return (
        <div className="total">
                {currentTotal
                    ? currentTotal.map((total, index) => {
                        <div>
                            <Container>
                                <ShowTotal currentTotal={total} key={index} />
                            </Container>

                            <Container>
                                <CreateTotal currentTotal={total} key={index} />
                            </Container>
                        </div>
                    })
                    : ''
                }
        </div>
    );
}