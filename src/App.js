import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';

import {Navbar, Nav, Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import Expenses from './components/molecules/Expenses';
import Total from './components/molecules/Total';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="#home">Money Handler</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link href="/">Dépenses</Nav.Link>
                            <Nav.Link href="/lists">Listes</Nav.Link>
                            <Nav.Link href="/total">Total</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>


                <Switch>
                    <Route path="/" exact={true}>
                        <Container>
                            <Expenses/>
                        </Container>
                    </Route>
                    <Route path="/lists">
                        Listes
                    </Route>
                    <Route path="/total">
                        <Total/>
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
