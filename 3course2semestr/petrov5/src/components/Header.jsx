import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Form, Nav, NavbarBrand, NavDropdown} from "react-bootstrap";

function BrandExample() {
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#">Столовая №1</Navbar.Brand>
                    <img
                        src="https://ir-3.ozone.ru/s3/multimedia-1-n/w1200/7107009755.jpg"
                        width="70"
                        height="70"
                        className="d-inline-block align-top"
                        alt="Cafe logo"
                    />
                    <Navbar.Toggle aria-controls="navbarScroll"/>
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="d-flex justify-content-around "
                            style={{maxHeight: '100px', width: '100%'}}
                            navbarScroll
                        >
                            <Nav.Link href="#card">Card1</Nav.Link>
                            <Nav.Link href="#card2">Card2</Nav.Link>
                            <NavDropdown title="Link" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#card3">Card3</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                    <NavbarBrand>
                        <button style={{border: 'none', background: 'none'}}>
                        <img
                            src="https://www.servicenow.com/community/s/legacyfs/online/avatars_servicenow/a9a7392fdbbfdb00d58ea345ca96198f.jpg"
                            width="100"
                            height="100"
                            className="d-inline-block align-top"
                            alt="Cafe logo"
                        />
                        </button>
                    </NavbarBrand>
                </Container>
            </Navbar>
        </>
    );
}

export default BrandExample;